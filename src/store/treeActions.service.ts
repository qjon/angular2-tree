import {Injectable} from '@angular/core';
import {IOuterNode} from '../interfaces/IOuterNode';
import {ITreeAction} from './ITreeState';
import {Action} from '@ngrx/store';
import {IConfiguration} from '../interfaces/IConfiguration';

export interface ITreeConfigurationAction extends Action {
  payload: {
    treeId: string;
    configuration?: IConfiguration;
  };
}

@Injectable()
export class TreeActionsService {
  static TREE_SAVE_NODE = 'TREE_SAVE_NODE';
  static TREE_SAVE_NODE_SUCCESS = 'TREE_SAVE_NODE_SUCCESS';
  static TREE_SAVE_NODE_ERROR = 'TREE_SAVE_NODE_ERROR';
  static TREE_DELETE_NODE = 'TREE_DELETE_NODE';
  static TREE_DELETE_NODE_SUCCESS = 'TREE_DELETE_NODE_SUCCESS';
  static TREE_DELETE_NODE_ERROR = 'TREE_DELETE_NODE_ERROR';
  static TREE_EDIT_NODE_START = 'TREE_EDIT_NODE_START';
  static TREE_COLLAPSE_NODE = 'TREE_COLLAPSE_NODE';
  static TREE_EXPAND_NODE = 'TREE_EXPAND_NODE';
  static TREE_INSERT_NODE = 'TREE_INSERT_NODE';
  static TREE_LOAD = 'TREE_LOAD';
  static TREE_LOAD_PATH = 'TREE_LOAD_PATH';
  static TREE_LOAD_SUCCESS = 'TREE_LOAD_SUCCESS';
  static TREE_LOAD_ERROR = 'TREE_LOAD_ERROR';
  static TREE_MARK_AS_FULLY_LOADED = 'TREE_MARK_AS_FULLY_LOADED';
  static TREE_MOVE_NODE = 'TREE_MOVE_NODE';
  static TREE_MOVE_NODE_SUCCESS = 'TREE_MOVE_NODE_SUCCESS';
  static TREE_MOVE_NODE_ERROR = 'TREE_MOVE_NODE_ERROR';

  static TREE_REGISTER = 'TREE_REGISTER';
  static TREE_SELECT_NODE = 'TREE_SELECT_NODE';
  static TREE_SET_ALL_NODES = 'TREE_SET_ALL_NODES';
  static TREE_SET_CONFIGURATION = 'TREE_SET_CONFIGURATION';

  public registerTree(treeId: string, silent = false, nodes: IOuterNode[] = []): ITreeAction {
    return {
      type: TreeActionsService.TREE_REGISTER,
      payload: {treeId, silent, nodes}
    };
  }

  public editNodeStart(node: IOuterNode): ITreeAction {
    return {
      type: TreeActionsService.TREE_EDIT_NODE_START,
      payload: {
        node,
        treeId: node.treeId
      }
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

  public collapseNode(treeId: string, id: string): ITreeAction {
    return {
      type: TreeActionsService.TREE_COLLAPSE_NODE,
      payload: {treeId, id}
    };
  }

  public expandNode(treeId: string, id: string): ITreeAction {
    return {
      type: TreeActionsService.TREE_EXPAND_NODE,
      payload: {treeId, id}
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

  public markAsFullyLoaded(treeId: string): ITreeConfigurationAction {
    return {
      type: TreeActionsService.TREE_MARK_AS_FULLY_LOADED,
      payload: {treeId}
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

  public setAllNodes(treeId: string, nodes: IOuterNode[]): ITreeAction {
    return {
      type: TreeActionsService.TREE_SET_ALL_NODES,
      payload: {
        treeId: treeId,
        nodes: nodes
      }
    };
  }

  public setConfiguration(treeId: string, configuration: IConfiguration): ITreeConfigurationAction {
    return {
      type: TreeActionsService.TREE_SET_CONFIGURATION,
      payload: {treeId, configuration}
    };
  }

  public loadPath(treeId: string, ids: string[]): ITreeAction {
    return {
      type: TreeActionsService.TREE_LOAD_PATH,
      payload: {treeId, ids}
    };
  }

  public selectNode(treeId: string, node: IOuterNode): ITreeAction {
    return {
      type: TreeActionsService.TREE_SELECT_NODE,
      payload: {node, treeId}
    };
  }

}
