import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {ITreeState} from './ITreeState';
import {TreeActionsService} from './treeActions.service';
import {IOuterNode} from '../interfaces/IOuterNode';

@Injectable()
export class TreeActionsDispatcherService {

  public constructor(private actions: TreeActionsService,
                     private store: Store<ITreeState>) {

  }

  public collapseNode(treeId: string, id: string): void {
    this.store.dispatch(this.actions.collapseNode(treeId, id));
  }

  public deleteNode(treeId: string, node: IOuterNode): void {
    this.store.dispatch(this.actions.deleteNode(treeId, node));
  }

  public editNodeStart(node: IOuterNode): void {
    this.store.dispatch(this.actions.editNodeStart(node));
  }

  public expandNode(treeId: string, id: string): void {
    this.store.dispatch(this.actions.expandNode(treeId, id));
  }

  public loadPath(treeId: string, ids: string[], hasLoadedNodes = false): void {
    this.store.dispatch(this.actions.loadPath(treeId, ids, hasLoadedNodes));
  }

  public loadTree(treeId: string, id: string): void {
    this.store.dispatch(this.actions.loadTree(treeId, id));
  }

  public registerTree(treeId: string, silent = false, nodes: IOuterNode[]): void {
    this.store.dispatch(this.actions.registerTree(treeId, silent, nodes));
  }

  public saveNode(treeId: string, node: IOuterNode): void {
    this.store.dispatch(this.actions.saveNode(treeId, node));
  }
}
