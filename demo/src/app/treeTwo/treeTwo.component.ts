import {Component, OnInit} from '@angular/core';
import {IConfiguration, IContextMenu, ITreeState, ITreeData, TreeModel, TreeActionsService, NodeDispatcherService} from '../../../../main';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {TreeTwoNodeService} from './treeTwoNode.service';

@Component({
  selector: 'app-tree-two',
  templateUrl: './treeTwo.component.html'
})
export class TreeTwoComponent implements OnInit {
  public folders: Observable<ITreeData>;

  public contextMenu: IContextMenu[] = [];

  public treeConfiguration: IConfiguration = {
    showAddButton: true,
    disableMoveNodes: false,
    treeId: 'tree2',
    dragZone: 'tree2',
    dropZone: ['tree2']
  };

  public treeModel: TreeModel;

  public constructor(private store: Store<ITreeState>,
                     private treeActions: TreeActionsService,
                     private nodeDispatcherService: NodeDispatcherService,
                     private treeTwoNodeService: TreeTwoNodeService) {
  }

  public ngOnInit() {
    const treeId = this.treeConfiguration.treeId;
    this.nodeDispatcherService.register(treeId, this.treeTwoNodeService);

    this.store.dispatch(this.treeActions.registerTree(treeId));

    this.folders = this.store.select('trees')
      .map((data: ITreeState) => {
        return data[treeId];
      })
      .filter((data: ITreeData) => !!data)
    ;
    this.treeModel = new TreeModel(this.folders, this.treeConfiguration);
  }
}
