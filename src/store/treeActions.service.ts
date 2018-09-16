import {IOuterNode} from '../interfaces/IOuterNode';
import {Action} from '@ngrx/store';
import {IConfiguration} from '../interfaces/IConfiguration';

export enum TreeActionTypes {
  TREE_SAVE_NODE = 'TREE_SAVE_NODE',
  TREE_SAVE_NODE_SUCCESS = 'TREE_SAVE_NODE_SUCCESS',
  TREE_SAVE_NODE_ERROR = 'TREE_SAVE_NODE_ERROR',
  TREE_DELETE_NODE = 'TREE_DELETE_NODE',
  TREE_DELETE_NODE_SUCCESS = 'TREE_DELETE_NODE_SUCCESS',
  TREE_DELETE_NODE_ERROR = 'TREE_DELETE_NODE_ERROR',
  TREE_EDIT_NODE_START = 'TREE_EDIT_NODE_START',
  TREE_COLLAPSE_NODE = 'TREE_COLLAPSE_NODE',
  TREE_EXPAND_NODE = 'TREE_EXPAND_NODE',
  TREE_INSERT_NODE = 'TREE_INSERT_NODE',
  TREE_LOAD = 'TREE_LOAD',
  TREE_LOAD_PATH = 'TREE_LOAD_PATH',
  TREE_LOAD_SUCCESS = 'TREE_LOAD_SUCCESS',
  TREE_LOAD_ERROR = 'TREE_LOAD_ERROR',
  TREE_MARK_AS_FULLY_LOADED = 'TREE_MARK_AS_FULLY_LOADED',
  TREE_MOVE_NODE = 'TREE_MOVE_NODE',
  TREE_MOVE_NODE_SUCCESS = 'TREE_MOVE_NODE_SUCCESS',
  TREE_MOVE_NODE_ERROR = 'TREE_MOVE_NODE_ERROR',
  TREE_REGISTER = 'TREE_REGISTER',
  TREE_SELECT_NODE = 'TREE_SELECT_NODE',
  TREE_SET_ALL_NODES = 'TREE_SET_ALL_NODES',
  TREE_SET_CONFIGURATION = 'TREE_SET_CONFIGURATION'
}

export class TreeCollapseNodeAction implements Action {
  readonly type = TreeActionTypes.TREE_COLLAPSE_NODE;

  public constructor(public payload: { treeId: string, id: string }) {

  }
}

export class TreeDeleteNodeAction implements Action {
  readonly type = TreeActionTypes.TREE_DELETE_NODE;

  public constructor(public payload: { treeId: string, node: IOuterNode }) {

  }
}

export class TreeDeleteNodeErrorAction implements Action {
  readonly type = TreeActionTypes.TREE_DELETE_NODE_ERROR;

  public constructor(public payload: { treeId: string, node: IOuterNode }) {

  }
}

export class TreeDeleteNodeSuccessAction implements Action {
  readonly type = TreeActionTypes.TREE_DELETE_NODE_SUCCESS;

  public constructor(public payload: { treeId: string, node: IOuterNode }) {

  }
}

export class TreeEditNodeStartAction implements Action {
  readonly type = TreeActionTypes.TREE_EDIT_NODE_START;

  public constructor(public payload: { node: IOuterNode }) {

  }
}

export class TreeExpandNodeAction implements Action {
  readonly type = TreeActionTypes.TREE_EXPAND_NODE;

  public constructor(public payload: { treeId: string, id: string }) {

  }
}

export class TreeInsertNodeAction implements Action {
  readonly type = TreeActionTypes.TREE_INSERT_NODE;

  public constructor(public payload: { treeId: string, parentId: string }) {

  }
}

export class TreeLoadNodesAction implements Action {
  readonly type = TreeActionTypes.TREE_LOAD;

  public constructor(public payload: { treeId: string, id: string }) {

  }
}

export class TreeLoadNodesErrorAction implements Action {
  readonly type = TreeActionTypes.TREE_LOAD_ERROR;

  public constructor(public payload: { treeId: string, id: string }) {

  }
}

export class TreeLoadNodesSuccessAction implements Action {
  readonly type = TreeActionTypes.TREE_LOAD_SUCCESS;

  public constructor(public payload: { treeId: string, id: string, nodes: IOuterNode[] }) {

  }
}

export class TreeLoadPathAction implements Action {
  readonly type = TreeActionTypes.TREE_LOAD_PATH;

  public constructor(public payload: { treeId: string, ids: string[] }) {

  }
}

export class TreeMarkAsFullyLoadedAction implements Action {
  readonly type = TreeActionTypes.TREE_MARK_AS_FULLY_LOADED;

  public constructor(public payload: { treeId: string }) {

  }
}

export class TreeMoveNodeAction implements Action {
  readonly type = TreeActionTypes.TREE_MOVE_NODE;

  public constructor(public payload: { treeId: string, sourceOfDroppedData: string, oldNode: any, node: IOuterNode }) {

  }
}

export class TreeMoveNodeErrorAction implements Action {
  readonly type = TreeActionTypes.TREE_MOVE_NODE_ERROR;

  public constructor(public payload: { treeId: string, source: IOuterNode, target: IOuterNode }) {

  }
}

export class TreeMoveNodeSuccessAction implements Action {
  readonly type = TreeActionTypes.TREE_MOVE_NODE_SUCCESS;

  public constructor(public payload: { treeId: string, source: IOuterNode, target: IOuterNode }) {

  }
}

export class TreeRegisterAction implements Action {
  readonly type = TreeActionTypes.TREE_REGISTER;

  public constructor(public payload: { treeId: string, silent: boolean, nodes: IOuterNode[] }) {

  }
}

export class TreeSaveNodeAction implements Action {
  readonly type = TreeActionTypes.TREE_SAVE_NODE;

  public constructor(public payload: { treeId: string, node: IOuterNode }) {

  }
}

export class TreeSaveNodeErrorAction implements Action {
  readonly type = TreeActionTypes.TREE_SAVE_NODE_ERROR;

  public constructor(public payload: { treeId: string, node: IOuterNode }) {

  }
}

export class TreeSaveNodeSuccessAction implements Action {
  readonly type = TreeActionTypes.TREE_SAVE_NODE_SUCCESS;

  public constructor(public payload: { treeId: string, node: IOuterNode, oldNode: IOuterNode }) {

  }
}

export class TreeSelectNodeAction implements Action {
  readonly type = TreeActionTypes.TREE_SELECT_NODE;

  public constructor(public payload: { treeId: string, node: IOuterNode }) {

  }
}

export class TreeSetAllNodesAction implements Action {
  readonly type = TreeActionTypes.TREE_SET_ALL_NODES;

  public constructor(public payload: { treeId: string, nodes: IOuterNode[] }) {

  }
}

export class TreeSetConfigurationAction implements Action {
  readonly type = TreeActionTypes.TREE_SET_CONFIGURATION;

  public constructor(public payload: { treeId: string, configuration: IConfiguration }) {

  }
}

export type TreeAction =
  TreeCollapseNodeAction
  | TreeDeleteNodeAction
  | TreeDeleteNodeErrorAction
  | TreeDeleteNodeSuccessAction
  | TreeEditNodeStartAction
  | TreeExpandNodeAction
  | TreeInsertNodeAction
  | TreeLoadNodesAction
  | TreeLoadNodesErrorAction
  | TreeLoadNodesSuccessAction
  | TreeLoadNodesSuccessAction
  | TreeLoadPathAction
  | TreeMarkAsFullyLoadedAction
  | TreeMoveNodeAction
  | TreeMoveNodeErrorAction
  | TreeMoveNodeSuccessAction
  | TreeRegisterAction
  | TreeSaveNodeAction
  | TreeSaveNodeErrorAction
  | TreeSaveNodeSuccessAction
  | TreeSelectNodeAction
  | TreeSetAllNodesAction
  | TreeSetConfigurationAction
  ;


/**
 * @Deprecated In 4.0.0
 *
 * It will be removed
 */
export class TreeActionsService {

  /**
   * @Deprecated In 4.0.0
   *
   * Use instead TreeActionTypes.TREE_SAVE_NODE
   */
  static TREE_SAVE_NODE = TreeActionTypes.TREE_SAVE_NODE;

  /**
   * @Deprecated In 4.0.0
   *
   * Use instead TreeActionTypes.TREE_SAVE_NODE_SUCCESS
   */
  static TREE_SAVE_NODE_SUCCESS = TreeActionTypes.TREE_SAVE_NODE_SUCCESS;

  /**
   * @Deprecated In 4.0.0
   *
   * Use instead TreeActionTypes.TREE_SAVE_NODE_ERROR
   */
  static TREE_SAVE_NODE_ERROR = TreeActionTypes.TREE_SAVE_NODE_ERROR;

  /**
   * @Deprecated In 4.0.0
   *
   * Use instead TreeActionTypes.TREE_DELETE_NODE
   */
  static TREE_DELETE_NODE = TreeActionTypes.TREE_DELETE_NODE;

  /**
   * @Deprecated In 4.0.0
   *
   * Use instead TreeActionTypes.TREE_DELETE_NODE_SUCCESS
   */
  static TREE_DELETE_NODE_SUCCESS = TreeActionTypes.TREE_DELETE_NODE_SUCCESS;

  /**
   * @Deprecated In 4.0.0
   *
   * Use instead TreeActionTypes.TREE_DELETE_NODE_ERROR
   */
  static TREE_DELETE_NODE_ERROR = TreeActionTypes.TREE_DELETE_NODE_ERROR;

  /**
   * @Deprecated In 4.0.0
   *
   * Use instead TreeActionTypes.TREE_EDIT_NODE_START
   */
  static TREE_EDIT_NODE_START = TreeActionTypes.TREE_EDIT_NODE_START;

  /**
   * @Deprecated In 4.0.0
   *
   * Use instead TreeActionTypes.TREE_COLLAPSE_NODE
   */
  static TREE_COLLAPSE_NODE = TreeActionTypes.TREE_COLLAPSE_NODE;

  /**
   * @Deprecated In 4.0.0
   *
   * Use instead TreeActionTypes.TREE_EXPAND_NODE
   */
  static TREE_EXPAND_NODE = TreeActionTypes.TREE_EXPAND_NODE;

  /**
   * @Deprecated In 4.0.0
   *
   * Use instead TreeActionTypes.TREE_INSERT_NODE
   */
  static TREE_INSERT_NODE = TreeActionTypes.TREE_INSERT_NODE;

  /**
   * @Deprecated In 4.0.0
   *
   * Use instead TreeActionTypes.TREE_LOAD
   */
  static TREE_LOAD = TreeActionTypes.TREE_LOAD;

  /**
   * @Deprecated In 4.0.0
   *
   * Use instead TreeActionTypes.TREE_LOAD_PATH
   */
  static TREE_LOAD_PATH = TreeActionTypes.TREE_LOAD_PATH;

  /**
   * @Deprecated In 4.0.0
   *
   * Use instead TreeActionTypes.TREE_LOAD_SUCCESS
   */
  static TREE_LOAD_SUCCESS = TreeActionTypes.TREE_LOAD_SUCCESS;

  /**
   * @Deprecated In 4.0.0
   *
   * Use instead TreeActionTypes.TREE_LOAD_ERROR
   */
  static TREE_LOAD_ERROR = TreeActionTypes.TREE_LOAD_ERROR;

  /**
   * @Deprecated In 4.0.0
   *
   * Use instead TreeActionTypes.TREE_MARK_AS_FULLY_LOADED
   */
  static TREE_MARK_AS_FULLY_LOADED = TreeActionTypes.TREE_MARK_AS_FULLY_LOADED;

  /**
   * @Deprecated In 4.0.0
   *
   * Use instead TreeActionTypes.TREE_MOVE_NODE
   */
  static TREE_MOVE_NODE = TreeActionTypes.TREE_MOVE_NODE;

  /**
   * @Deprecated In 4.0.0
   *
   * Use instead TreeActionTypes.TREE_MOVE_NODE_SUCCESS
   */
  static TREE_MOVE_NODE_SUCCESS = TreeActionTypes.TREE_MOVE_NODE_SUCCESS;

  /**
   * @Deprecated In 4.0.0
   *
   * Use instead TreeActionTypes.TREE_MOVE_NODE_ERROR
   */
  static TREE_MOVE_NODE_ERROR = TreeActionTypes.TREE_MOVE_NODE_ERROR;

  /**
   * @Deprecated In 4.0.0
   *
   * Use instead TreeActionTypes.TREE_REGISTER
   */
  static TREE_REGISTER = TreeActionTypes.TREE_REGISTER;

  /**
   * @Deprecated In 4.0.0
   *
   * Use instead TreeActionTypes.TREE_SELECT_NODE
   */
  static TREE_SELECT_NODE = TreeActionTypes.TREE_SELECT_NODE;

  /**
   * @Deprecated In 4.0.0
   *
   * Use instead TreeActionTypes.TREE_SET_ALL_NODES
   */
  static TREE_SET_ALL_NODES = TreeActionTypes.TREE_SET_ALL_NODES;

  /**
   * @Deprecated In 4.0.0
   *
   * Use instead TreeActionTypes.TREE_SET_CONFIGURATION
   */
  static TREE_SET_CONFIGURATION = TreeActionTypes.TREE_SET_CONFIGURATION;

  /**
   * @Deprecated In 4.0.0
   *
   * Use instead store.dispatch(new TreeRegisterAction(...));
   */
  public registerTree(treeId: string, silent = false, nodes: IOuterNode[] = []): TreeRegisterAction {
    return new TreeRegisterAction({treeId, silent, nodes});
  }

  /**
   * @Deprecated In 4.0.0
   *
   * Use instead store.dispatch(new TreeEditNodeStartAction(...));
   */
  public editNodeStart(node: IOuterNode): TreeEditNodeStartAction {
    return new TreeEditNodeStartAction({node});
  }

  /**
   * @Deprecated In 4.0.0
   *
   * Use instead store.dispatch(new TreeSaveNodeAction(...));
   */
  public saveNode(treeId: string, node: IOuterNode): TreeSaveNodeAction {
    return new TreeSaveNodeAction({treeId, node});
  }

  /**
   * @Deprecated In 4.0.0
   *
   * Use instead store.dispatch(new TreeSaveNodeSuccessAction(...));
   */
  public saveNodeSuccess(treeId: string, oldNode: IOuterNode, node: IOuterNode): TreeSaveNodeSuccessAction {
    return new TreeSaveNodeSuccessAction({treeId, oldNode, node});
  }

  /**
   * @Deprecated In 4.0.0
   *
   * Use instead store.dispatch(new TreeSaveNodeErrorAction(...));
   */
  public saveNodeError(treeId: string, node: IOuterNode): TreeSaveNodeErrorAction {
    return new TreeSaveNodeErrorAction({treeId, node});
  }

  /**
   * @Deprecated In 4.0.0
   *
   * Use instead store.dispatch(new TreeDeleteNodeAction(...));
   */
  public deleteNode(treeId: string, node: IOuterNode): TreeDeleteNodeAction {
    return new TreeDeleteNodeAction({treeId, node});
  }

  /**
   * @Deprecated In 4.0.0
   *
   * Use instead store.dispatch(new TreeCollapseNodeAction(...));
   */
  public collapseNode(treeId: string, id: string): TreeCollapseNodeAction {
    return new TreeCollapseNodeAction({treeId, id});
  }

  /**
   * @Deprecated In 4.0.0
   *
   * Use instead store.dispatch(new TreeExpandNodeAction(...));
   */
  public expandNode(treeId: string, id: string): TreeExpandNodeAction {
    return new TreeExpandNodeAction({treeId, id});
  }

  /**
   * @Deprecated In 4.0.0
   *
   * Use instead store.dispatch(new TreeDeleteNodeSuccessAction(...));
   */
  public deleteNodeSuccess(treeId: string, node: IOuterNode): TreeDeleteNodeSuccessAction {
    return new TreeDeleteNodeSuccessAction({treeId, node});
  }

  /**
   * @Deprecated In 4.0.0
   *
   * Use instead store.dispatch(new TreeDeleteNodeErrorAction(...));
   */
  public deleteNodeError(treeId: string, node: IOuterNode): TreeDeleteNodeErrorAction {
    return new TreeDeleteNodeErrorAction({treeId, node});
  }

  /**
   * @Deprecated In 4.0.0
   *
   * Use instead store.dispatch(new TreeInsertNodeAction(...));
   */
  public insertNode(treeId: string, parentId: string | null): TreeInsertNodeAction {
    return new TreeInsertNodeAction({treeId, parentId});
  }

  /**
   * @Deprecated In 4.0.0
   *
   * Use instead store.dispatch(new TreeLoadNodesAction(...));
   */
  public loadTree(treeId: string, id: string | null): TreeLoadNodesAction {
    return new TreeLoadNodesAction({treeId, id});
  }

  /**
   * @Deprecated In 4.0.0
   *
   * Use instead store.dispatch(new TreeLoadNodesSuccessAction(...));
   */
  public loadTreeSuccess(treeId: string, id: string | null, nodes: IOuterNode[]): TreeLoadNodesSuccessAction {
    return new TreeLoadNodesSuccessAction({treeId, id, nodes});
  }

  /**
   * @Deprecated In 4.0.0
   *
   * Use instead store.dispatch(new TreeLoadNodesErrorAction(...));
   */
  public loadTreeError(treeId: string, id: string | null): TreeLoadNodesErrorAction {
    return new TreeLoadNodesErrorAction({treeId, id});
  }

  /**
   * @Deprecated In 4.0.0
   *
   * Use instead store.dispatch(new TreeMarkAsFullyLoadedAction(...));
   */
  public markAsFullyLoaded(treeId: string): TreeMarkAsFullyLoadedAction {
    return new TreeMarkAsFullyLoadedAction({treeId});
  }

  /**
   * @Deprecated In 4.0.0
   *
   * Use instead store.dispatch(new TreeMoveNodeAction(...));
   */
  public moveNode(type: string, treeId: string, source: any, target: IOuterNode | null): TreeMoveNodeAction {
    return new TreeMoveNodeAction({
      sourceOfDroppedData: type,
      treeId: treeId,
      oldNode: source,
      node: target
    });
  }

  /**
   * @Deprecated In 4.0.0
   *
   * Use instead store.dispatch(new TreeMoveNodeSuccessAction(...));
   */
  public moveNodeSuccess(treeId: string, source: IOuterNode, target: IOuterNode): TreeMoveNodeSuccessAction {
    return new TreeMoveNodeSuccessAction({
      treeId: treeId,
      source: source,
      target: target
    });
  }

  /**
   * @Deprecated In 4.0.0
   *
   * Use instead store.dispatch(new TreeMoveNodeErrorAction(...));
   */
  public moveNodeError(treeId: string, source: IOuterNode, target: IOuterNode): TreeMoveNodeErrorAction {
    return new TreeMoveNodeErrorAction({
      treeId: treeId,
      source: source,
      target: target
    });
  }

  /**
   * @Deprecated In 4.0.0
   *
   * Use instead store.dispatch(new TreeSetAllNodesAction(...));
   */
  public setAllNodes(treeId: string, nodes: IOuterNode[]): TreeSetAllNodesAction {
    return new TreeSetAllNodesAction({treeId, nodes});
  }

  /**
   * @Deprecated In 4.0.0
   *
   * Use instead store.dispatch(new TreeSetConfigurationAction(...));
   */
  public setConfiguration(treeId: string, configuration: IConfiguration): TreeSetConfigurationAction {
    return new TreeSetConfigurationAction({treeId, configuration});
  }

  /**
   * @Deprecated In 4.0.0
   *
   * Use instead store.dispatch(new TreeLoadPathAction(...));
   */
  public loadPath(treeId: string, ids: string[]): TreeLoadPathAction {
    return new TreeLoadPathAction({treeId, ids});
  }

  /**
   * @Deprecated In 4.0.0
   *
   * Use instead store.dispatch(new TreeSelectNodeAction(...));
   */
  public selectNode(treeId: string, node: IOuterNode): TreeSelectNodeAction {
    return new TreeSelectNodeAction({node, treeId});
  }
}
