import { Store } from '@ngrx/store';
import { ITreeState } from './ITreeState';
import { TreeActionsService } from './treeActions.service';
import { IOuterNode } from '../interfaces/IOuterNode';
import { IConfiguration } from '../interfaces/IConfiguration';
export declare class TreeActionsDispatcherService {
    private actions;
    private store;
    constructor(actions: TreeActionsService, store: Store<ITreeState>);
    collapseNode(treeId: string, id: string): void;
    deleteNode(treeId: string, node: IOuterNode): void;
    editNodeStart(node: IOuterNode): void;
    expandNode(treeId: string, id: string): void;
    loadPath(treeId: string, ids: string[]): void;
    loadTree(treeId: string, id: string): void;
    markAsFullyLoaded(treeId: string): void;
    registerTree(treeId: string, silent: boolean, nodes: IOuterNode[]): void;
    saveNode(treeId: string, node: IOuterNode): void;
    setConfiguration(treeId: string, configuration: IConfiguration): void;
    selectNode(treeId: string, node: IOuterNode): void;
}
