import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {ITreeState} from './ITreeState';
import {
  TreeCollapseNodeAction,
  TreeDeleteNodeAction,
  TreeEditNodeStartAction,
  TreeExpandNodeAction,
  TreeLoadNodesAction,
  TreeLoadPathAction,
  TreeMarkAsFullyLoadedAction,
  TreeRegisterAction,
  TreeSaveNodeAction,
  TreeSelectNodeAction,
  TreeSetConfigurationAction
} from './treeActions.service';
import {IOuterNode} from '../interfaces/IOuterNode';
import {IConfiguration} from '../interfaces/IConfiguration';

/**
 * @Deprecated In 4.0.0
 *
 * Will be removed
 */
@Injectable()
export class TreeActionsDispatcherService {

  public constructor(private store: Store<ITreeState>) {

  }

  /**
   * @Deprecated In 4.0.0
   *
   * Use store.dispatch directly
   *
   * @param treeId
   * @param id
   */
  public collapseNode(treeId: string, id: string): void {
    this.store.dispatch(new TreeCollapseNodeAction({treeId, id}));
  }

  /**
   * @Deprecated In 4.0.0
   *
   * Use store.dispatch directly
   */
  public deleteNode(treeId: string, node: IOuterNode): void {
    this.store.dispatch(new TreeDeleteNodeAction({treeId, node}));
  }

  /**
   * @Deprecated In 4.0.0
   *
   * Use store.dispatch directly
   */
  public editNodeStart(node: IOuterNode): void {
    this.store.dispatch(new TreeEditNodeStartAction({node}));
  }

  /**
   * @Deprecated In 4.0.0
   *
   * Use store.dispatch directly
   */
  public expandNode(treeId: string, id: string): void {
    this.store.dispatch(new TreeExpandNodeAction({treeId, id}));
  }

  /**
   * @Deprecated In 4.0.0
   *
   * Use store.dispatch directly
   */
  public loadPath(treeId: string, ids: string[]): void {
    this.store.dispatch(new TreeLoadPathAction({treeId, ids}));
  }

  /**
   * @Deprecated In 4.0.0
   *
   * Use store.dispatch directly
   */
  public loadTree(treeId: string, id: string): void {
    this.store.dispatch(new TreeLoadNodesAction({treeId, id}));
  }

  /**
   * @Deprecated In 4.0.0
   *
   * Use store.dispatch directly
   */
  public markAsFullyLoaded(treeId: string): void {
    this.store.dispatch(new TreeMarkAsFullyLoadedAction({treeId}));
  }

  /**
   * @Deprecated In 4.0.0
   *
   * Use store.dispatch directly
   */
  public registerTree(treeId: string, silent = false, nodes: IOuterNode[]): void {
    this.store.dispatch(new TreeRegisterAction({treeId, silent, nodes}));
  }

  /**
   * @Deprecated In 4.0.0
   *
   * Use store.dispatch directly
   */
  public saveNode(treeId: string, node: IOuterNode): void {
    this.store.dispatch(new TreeSaveNodeAction({treeId, node}));
  }

  /**
   * @Deprecated In 4.0.0
   *
   * Use store.dispatch directly
   */
  public setConfiguration(treeId: string, configuration: IConfiguration): void {
    this.store.dispatch(new TreeSetConfigurationAction({treeId, configuration}));
  }

  /**
   * @Deprecated In 4.0.0
   *
   * Use store.dispatch directly
   */
  public selectNode(treeId: string, node: IOuterNode): void {
    this.store.dispatch(new TreeSelectNodeAction({treeId, node}));
  }
}
