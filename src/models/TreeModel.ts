import {IOuterNode} from '../interfaces/IOuterNode';
import {Observable} from 'rxjs/Observable';
import {IConfiguration} from '../interfaces/IConfiguration';
import {ITreeData} from '../store/ITreeState';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {map} from 'rxjs/operators';
import {TreeActionsDispatcherService} from '../store/treeActionsDispatcher.service';

export class TreeModel {
  public currentSelectedNode$: BehaviorSubject<IOuterNode> = new BehaviorSubject(null);

  public get treeId(): string {
    return this.configuration.treeId;
  }

  public get isFullyLoaded(): boolean {
    return this._fullyLoaded;
  }

  public constructor(private treeActionDispatcher: TreeActionsDispatcherService,
                     private nodes$: Observable<ITreeData>,
                     public configuration: IConfiguration,
                     private _fullyLoaded = false) {
    this.initConfiguration();
  }

  public getRootNodes() {
    return this.getChildren(null);
  }

  public getChildren(nodeId: string | null) {
    return this.nodes$
      .pipe(
        map((state: ITreeData): IOuterNode[] => this.getNodesByParentId(state, nodeId)),
        map((nodes: IOuterNode[]) => {
          return nodes.sort(this.sortNodes);
        })
      );
  }

  public initPath(path: string[]): void {
    this.treeActionDispatcher.loadPath(this.configuration.treeId, path, this.isFullyLoaded);
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

  private getNodesByParentId(state: ITreeData, id: string | null): IOuterNode[] {
    return Object.keys(state)
      .filter((key: string) => state[key].parentId === id)
      .map((key: string) => state[key]);
  }

  private sortNodes(first: IOuterNode, second: IOuterNode): number {
    if (second.id === null) {
      return 1;
    }

    return first.name > second.name ? 1 : -1;
  }
}
