import {Injectable} from '@angular/core';
import {IOuterNode} from '../interfaces/IOuterNode';
import {Action} from '@ngrx/store';
import {ITreeAction} from './ITreeState';

@Injectable()
export class TreeActionsService {
  static TREE_SAVE_NODE = 'TREE_SAVE_NODE';
  static TREE_SAVE_NODE_SUCCESS = 'TREE_SAVE_NODE_SUCCESS';
  static TREE_SAVE_NODE_ERROR = 'TREE_SAVE_NODE_ERROR';
  static TREE_DELETE_NODE = 'TREE_DELETE_NODE';
  static TREE_DELETE_NODE_SUCCESS = 'TREE_DELETE_NODE_SUCCESS';
  static TREE_DELETE_NODE_ERROR = 'TREE_DELETE_NODE_ERROR';
  static TREE_EDIT_NODE_START = 'TREE_EDIT_NODE_START';
  static TREE_EXPAND_NODE = 'TREE_EXPAND_NODE';
  static TREE_INSERT_NODE = 'TREE_INSERT_NODE';
  static TREE_LOAD = 'TREE_LOAD';
  static TREE_LOAD_SUCCESS = 'TREE_LOAD_SUCCESS';
  static TREE_LOAD_ERROR = 'TREE_LOAD_ERROR';
  static TREE_MOVE_NODE = 'TREE_MOVE_NODE';
  static TREE_MOVE_NODE_SUCCESS = 'TREE_MOVE_NODE_SUCCESS';
  static TREE_MOVE_NODE_ERROR = 'TREE_MOVE_NODE_ERROR';

  static TREE_REGISTER = 'TREE_REGISTER';

  public registerTree(treeId: string): ITreeAction {
    return {
      type: TreeActionsService.TREE_REGISTER,
      payload: {
        treeId: treeId
      }
    };
  }

  public editNodeStart(node: IOuterNode): Action {
    return {
      type: TreeActionsService.TREE_EDIT_NODE_START,
      payload: node
    };
  }

  public saveNode(treeId: string, node: IOuterNode): ITreeAction {
    return {
      type: TreeActionsService.TREE_SAVE_NODE,
      payload: {
        treeId: treeId,
        node: node
      }
    };
  }

  public saveNodeSuccess(treeId: string, oldNode: IOuterNode, node: IOuterNode): ITreeAction {
    return {
      type: TreeActionsService.TREE_SAVE_NODE_SUCCESS,
      payload: {
        treeId: treeId,
        oldNode: oldNode,
        node: node
      }
    };
  }

  public saveNodeError(treeId: string, node: IOuterNode): ITreeAction {
    return {
      type: TreeActionsService.TREE_SAVE_NODE_ERROR,
      payload: {
        treeId: treeId,
        node: node
      }
    };
  }

  public deleteNode(treeId: string, node: IOuterNode): ITreeAction {
    return {
      type: TreeActionsService.TREE_DELETE_NODE,
      payload: {
        treeId: treeId,
        node: node
      }
    };
  }

  public expandNode(treeId: string, node: IOuterNode): ITreeAction {
    return {
      type: TreeActionsService.TREE_EXPAND_NODE,
      payload: {
        treeId: treeId,
        node: node
      }
    };
  }

  public deleteNodeSuccess(treeId: string, node: IOuterNode): ITreeAction {
    return {
      type: TreeActionsService.TREE_DELETE_NODE_SUCCESS,
      payload: {
        treeId: treeId,
        node: node
      }
    };
  }

  public deleteNodeError(treeId: string, node: IOuterNode): ITreeAction {
    return {
      type: TreeActionsService.TREE_DELETE_NODE_ERROR,
      payload: {
        treeId: treeId,
        node: node
      }
    };
  }

  public insertNode(treeId: string, parentId: string | null): ITreeAction {
    return {
      type: TreeActionsService.TREE_INSERT_NODE,
      payload: {
        treeId: treeId,
        id: parentId
      }
    };
  }

  public loadTree(treeId: string, id: string | null): ITreeAction {
    return {
      type: TreeActionsService.TREE_LOAD,
      payload: {
        treeId: treeId,
        id: id
      }
    };
  }

  public loadTreeSuccess(treeId: string, id: string | null, nodes: IOuterNode[]): ITreeAction {
    return {
      type: TreeActionsService.TREE_LOAD_SUCCESS,
      payload: {
        treeId: treeId,
        id: id,
        nodes: nodes
      }
    };
  }

  public loadTreeError(treeId: string, id: string | null): ITreeAction {
    return {
      type: TreeActionsService.TREE_LOAD_ERROR,
      payload: {
        treeId: treeId,
        id: id
      }
    };
  }

  public moveNode(type: string, treeId: string, source: any, target: IOuterNode | null): ITreeAction {
    return {
      type: TreeActionsService.TREE_MOVE_NODE,
      payload: {
        sourceOfDroppedData: type,
        treeId: treeId,
        oldNode: source,
        node: target
      }
    };
  }

  public moveNodeSuccess(treeId: string, source: IOuterNode, target: IOuterNode): ITreeAction {
    return {
      type: TreeActionsService.TREE_MOVE_NODE_SUCCESS,
      payload: {
        treeId: treeId,
        source: source,
        target: target
      }
    };
  }

  public moveNodeError(treeId: string, source: IOuterNode, target: IOuterNode): ITreeAction {
    return {
      type: TreeActionsService.TREE_MOVE_NODE_ERROR,
      payload: {
        treeId: treeId,
        source: source,
        target: target
      }
    };
  }

}
