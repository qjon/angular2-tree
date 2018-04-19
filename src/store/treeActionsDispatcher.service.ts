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

  public registerTree(treeId: string, silent = false, nodes: IOuterNode[]): void {
    this.store.dispatch(this.actions.registerTree(treeId, silent, nodes));
  }
}
