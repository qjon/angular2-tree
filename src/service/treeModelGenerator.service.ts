import {Injectable} from '@angular/core';
import {IConfiguration} from '../interfaces/IConfiguration';
import {TreeModel} from '../models/TreeModel';
import {treeSelector} from '../store/treeReducer';
import {Store} from '@ngrx/store';
import {ITreeState} from '../store/ITreeState';
import {NodeService} from './node.service';
import {NodeDispatcherService} from './nodesDispatcher.service';
import {TreeActionsDispatcherService} from '../store/treeActionsDispatcher.service';
import {IOuterNode} from '../interfaces/IOuterNode';

@Injectable()
export class TreeModelGeneratorService {
  public constructor(private nodeDispatcherService: NodeDispatcherService,
                     private treeActionsDispatcher: TreeActionsDispatcherService,
                     private store: Store<ITreeState>) {

  }

  public createTreeModel(configuration: IConfiguration, nodeService: NodeService, nodes: IOuterNode[] = null): TreeModel {
    const treeId = configuration.treeId;
    const isFullyLoaded = Boolean(nodes);

    // register node service
    this.nodeDispatcherService.register(treeId, nodeService);

    // register new tree in store
    this.treeActionsDispatcher.registerTree(treeId, isFullyLoaded, nodes);

    const folders$ = this.store.select(treeSelector(configuration.treeId));

    return new TreeModel(folders$, configuration, isFullyLoaded);
  }
}
