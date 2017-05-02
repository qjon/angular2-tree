import {Component, OnInit} from '@angular/core';
import {
  IConfiguration,
  IContextMenu,
  ITreeState,
  TreeActionsService,
  TreeModel,
  NodeDispatcherService
} from '../../../../main';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {ITreeData} from '../../../../src/store/ITreeState';
import {NodeService} from '../../../../src/service/node.service';

@Component({
  selector: 'app-tree-three',
  templateUrl: './treeOne.component.html'
})
export class TreeThreeComponent implements OnInit {
  public folders: Observable<ITreeData>;

  public contextMenu: IContextMenu[] = [];

  public treeConfiguration: IConfiguration = {
    showAddButton: true,
    disableMoveNodes: false,
    treeId: 'tree3',
    dragZone: 'tree3',
    dropZone: ['tree3']
  };

  public treeModel: TreeModel;

  public constructor(private store: Store<ITreeState>,
                     private treeActions: TreeActionsService,
                     private nodeDispatcherService: NodeDispatcherService,
                     private nodeService: NodeService) {
  }

  public ngOnInit() {
    const treeId = this.treeConfiguration.treeId;
    this.nodeDispatcherService.register(treeId, this.nodeService);

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
