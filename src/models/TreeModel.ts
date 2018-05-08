import {IOuterNode} from '../interfaces/IOuterNode';
import {Observable} from 'rxjs/Observable';
import {IConfiguration} from '../interfaces/IConfiguration';
import {ITreeData, ITreeNodes} from '../store/ITreeState';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {TreeActionsDispatcherService} from '../store/treeActionsDispatcher.service';
import {distinctUntilChanged, map} from 'rxjs/operators';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/do';
import * as isEqual from 'lodash.isequal';
import {NEW_NODE_ID} from '../store/treeReducer';

export class TreeModel {
  public currentSelectedNode$: BehaviorSubject<IOuterNode> = new BehaviorSubject(null);

  public get treeId(): string {
    return this.configuration.treeId;
  }

  public get isFullyLoaded(): boolean {
    return this._fullyLoaded;
  }

  public nodes$: Observable<ITreeNodes>;
  public rootNodes$: Observable<IOuterNode[]>;

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

    this.initConfiguration();
  }

  public getParentsList(): Observable<IOuterNode[]> {
    return Observable.combineLatest(
      this.currentSelectedNode$.asObservable(),
      this.nodes$
    )
      .pipe(
        map(([currentNode, nodes]: [IOuterNode, ITreeNodes]): IOuterNode[] => {
          const parents: IOuterNode[] = [];
          let node: IOuterNode = Object.assign({}, currentNode);

          do {
            parents.push(node);
            node = node.parentId ? nodes[node.parentId] : null;
          } while (node);

          return parents.reverse();
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
