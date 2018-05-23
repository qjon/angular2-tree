import {IOuterNode} from '../interfaces/IOuterNode';
import {Observable} from 'rxjs/Observable';
import {IConfiguration} from '../interfaces/IConfiguration';
import {ITreeData, ITreeNodes} from '../store/ITreeState';
import {TreeActionsDispatcherService} from '../store/treeActionsDispatcher.service';
import {distinctUntilChanged, map} from 'rxjs/operators';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/do';
import * as _isEqual from 'lodash.isequal';
import {NEW_NODE_ID} from '../store/treeReducer';

const isEqual = _isEqual;

export class TreeModel {

  public get treeId(): string {
    return this.configuration.treeId;
  }

  public get isFullyLoaded(): boolean {
    return this._fullyLoaded;
  }

  public nodes$: Observable<ITreeNodes>;
  public rootNodes$: Observable<IOuterNode[]>;
  public currentSelectedNode$: Observable<IOuterNode>;

  public constructor(private treeActionDispatcher: TreeActionsDispatcherService,
                     private treeData$: Observable<ITreeData>,
                     public configuration: IConfiguration,
                     private _fullyLoaded = false) {
    this.nodes$ = this.treeData$
      .pipe(
        distinctUntilChanged((prev: ITreeData, next: ITreeData) => {
          return isEqual(prev.nodes.entities, next.nodes.entities)
        }),
        map((treeData: ITreeData): ITreeNodes => treeData.nodes.entities)
      );

    this.rootNodes$ = this.treeData$
      .pipe(
        map((treeData: ITreeData): IOuterNode[] => treeData.nodes.rootNodes.map((id) => treeData.nodes.entities[id]).sort(this.sortNodes)),
        distinctUntilChanged(),
      );

    this.currentSelectedNode$ = this.treeData$
      .pipe(
        map((treeData: ITreeData): IOuterNode => {
          const nodesData = treeData.nodes;
          const selectedId = nodesData.selected;

          return selectedId ? nodesData.entities[selectedId] : null
        }),
        // distinctUntilChanged((prev: IOuterNode, next: IOuterNode) => {
        //   return isEqual(prev ? prev.id : null, next ? next.id : null)
        // })
      );

    this.initConfiguration();
  }

  public getParentsList(): Observable<IOuterNode[]> {
    return Observable.combineLatest(
      this.currentSelectedNode$,
      this.nodes$
    )
      .pipe(
        map(([currentNode, nodes]: [IOuterNode, ITreeNodes]): IOuterNode[] => {
          if (!Boolean(currentNode)) {
            return [];
          }

          const parents: IOuterNode[] = currentNode.parents.map(id => nodes[id]);

          parents.push(currentNode);

          return parents;
        })
      )
  }

  public getChildren(nodeId: string | null) {
    return this.nodes$
      .pipe(
        map((state: ITreeNodes): IOuterNode[] => this.getNodesByParentId(state, nodeId)),
        map((nodes: IOuterNode[]) => {
          return [...nodes].sort(this.sortNodes);
        })
      );
  }

  public initPath(path: string[]): void {
    this.treeActionDispatcher.loadPath(this.configuration.treeId, path);
  }

  private initConfiguration(): void {
    const defaultConfiguration: IConfiguration = {
      disableMoveNodes: false,
      dragZone: null,
      dropZone: null,
      treeId: 'tree',
      showAddButton: true,
      isAnimation: false,
    };

    for (const key in defaultConfiguration) {
      if (this.configuration[key] === undefined) {
        this.configuration[key] = defaultConfiguration[key];
      }
    }
  }

  private getNodesByParentId(state: ITreeNodes, id: string | null): IOuterNode[] {
    return Object.keys(state)
      .filter((key: string) => state[key].parentId === id)
      .map((key: string) => state[key]);
  }

  private sortNodes(first: IOuterNode, second: IOuterNode): number {
    if (second.id === NEW_NODE_ID) {
      return -1;
    }

    return first.name > second.name ? 1 : -1;
  }
}
