import { IConfiguration } from '../interfaces/IConfiguration';
import { TreeModel } from '../models/TreeModel';
import { Store } from '@ngrx/store';
import { ITreeState } from '../store/ITreeState';
import { NodeDispatcherService } from './nodesDispatcher.service';
import { TreeActionsDispatcherService } from '../store/treeActionsDispatcher.service';
import { IOuterNode } from '../interfaces/IOuterNode';
export declare class TreeModelGeneratorService {
    private nodeDispatcherService;
    private treeActionsDispatcher;
    private store;
    constructor(nodeDispatcherService: NodeDispatcherService, treeActionsDispatcher: TreeActionsDispatcherService, store: Store<ITreeState>);
    createTreeModel(configuration: IConfiguration, nodes?: IOuterNode[]): TreeModel;
}
