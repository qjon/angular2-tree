import {Injectable} from '@angular/core';
import {IConfiguration} from '../interfaces/IConfiguration';
import {TreeModel} from '../models/TreeModel';
import {treeSelector} from '../store/treeReducer';
import {Store} from '@ngrx/store';
import {ITreeState} from '../store/ITreeState';
import {NodeDispatcherService} from './nodesDispatcher.service';
import {TreeActionsDispatcherService} from '../store/treeActionsDispatcher.service';
import {IOuterNode} from '../interfaces/IOuterNode';

@Injectable()
export class TreeModelGeneratorService {
  public constructor(private nodeDispatcherService: NodeDispatcherService,
                     private treeActionsDispatcher: TreeActionsDispatcherService,
                     private store: Store<ITreeState>) {
  }

  public createTreeModel(configuration: IConfiguration, nodes: IOuterNode[] = null): TreeModel {
    const treeId = configuration.treeId;
    const isFullyLoaded = Boolean(nodes);

    // register new tree in store
    this.treeActionsDispatcher.registerTree(treeId, isFullyLoaded, nodes);

    const folders$ = this.store.select(treeSelector(configuration.treeId));

    return new TreeModel(this.treeActionsDispatcher, folders$, configuration, isFullyLoaded);
  }
}
