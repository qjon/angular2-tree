import { IOuterNode } from '../interfaces/IOuterNode';
import { ITreeAction } from './ITreeState';
import { Action } from '@ngrx/store';
import { IConfiguration } from '../interfaces/IConfiguration';
export interface ITreeConfigurationAction extends Action {
    payload: {
        treeId: string;
        configuration?: IConfiguration;
    };
}
export declare class TreeActionsService {
    static TREE_SAVE_NODE: string;
    static TREE_SAVE_NODE_SUCCESS: string;
    static TREE_SAVE_NODE_ERROR: string;
    static TREE_DELETE_NODE: string;
    static TREE_DELETE_NODE_SUCCESS: string;
    static TREE_DELETE_NODE_ERROR: string;
    static TREE_EDIT_NODE_START: string;
    static TREE_COLLAPSE_NODE: string;
    static TREE_EXPAND_NODE: string;
    static TREE_INSERT_NODE: string;
    static TREE_LOAD: string;
    static TREE_LOAD_PATH: string;
    static TREE_LOAD_SUCCESS: string;
    static TREE_LOAD_ERROR: string;
    static TREE_MARK_AS_FULLY_LOADED: string;
    static TREE_MOVE_NODE: string;
    static TREE_MOVE_NODE_SUCCESS: string;
    static TREE_MOVE_NODE_ERROR: string;
    static TREE_REGISTER: string;
    static TREE_SELECT_NODE: string;
    static TREE_SET_ALL_NODES: string;
    static TREE_SET_CONFIGURATION: string;
    registerTree(treeId: string, silent?: boolean, nodes?: IOuterNode[]): ITreeAction;
    editNodeStart(node: IOuterNode): ITreeAction;
    saveNode(treeId: string, node: IOuterNode): ITreeAction;
    saveNodeSuccess(treeId: string, oldNode: IOuterNode, node: IOuterNode): ITreeAction;
    saveNodeError(treeId: string, node: IOuterNode): ITreeAction;
    deleteNode(treeId: string, node: IOuterNode): ITreeAction;
    collapseNode(treeId: string, id: string): ITreeAction;
    expandNode(treeId: string, id: string): ITreeAction;
    deleteNodeSuccess(treeId: string, node: IOuterNode): ITreeAction;
    deleteNodeError(treeId: string, node: IOuterNode): ITreeAction;
    insertNode(treeId: string, parentId: string | null): ITreeAction;
    loadTree(treeId: string, id: string | null): ITreeAction;
    loadTreeSuccess(treeId: string, id: string | null, nodes: IOuterNode[]): ITreeAction;
    loadTreeError(treeId: string, id: string | null): ITreeAction;
    markAsFullyLoaded(treeId: string): ITreeConfigurationAction;
    moveNode(type: string, treeId: string, source: any, target: IOuterNode | null): ITreeAction;
    moveNodeSuccess(treeId: string, source: IOuterNode, target: IOuterNode): ITreeAction;
    moveNodeError(treeId: string, source: IOuterNode, target: IOuterNode): ITreeAction;
    setAllNodes(treeId: string, nodes: IOuterNode[]): ITreeAction;
    setConfiguration(treeId: string, configuration: IConfiguration): ITreeConfigurationAction;
    loadPath(treeId: string, ids: string[]): ITreeAction;
    selectNode(treeId: string, node: IOuterNode): ITreeAction;
}
