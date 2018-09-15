import {Component, OnInit} from '@angular/core';
import {IConfiguration, IContextMenu, ITreeData, TreeModel} from '../../../../main';
import {Observable} from 'rxjs/Observable';
import {IOuterNode} from '../../../../src/interfaces/IOuterNode';
import {TREE_ONE_ID, TreeOneNodeService} from './treeOneNode.service';
import {TreeInitializerService} from '../../../../src/service/initializer.service';

@Component({
  selector: 'app-tree-one',
  templateUrl: './treeOne.component.html',
})
export class TreeOneComponent implements OnInit {
  public folders: Observable<ITreeData>;

  public contextMenu: IContextMenu[] = [];

  public treeConfiguration: IConfiguration = {
    showAddButton: true,
    disableMoveNodes: false,
    treeId: TREE_ONE_ID,
    dragZone: TREE_ONE_ID,
    dropZone: [TREE_ONE_ID],
    isAnimation: true
  };

  public treeModel: TreeModel;

  public constructor(private treeInitializerService: TreeInitializerService,
                     private treeOneNodeService: TreeOneNodeService) {
  }

  public ngOnInit(): void {
    const nodes: IOuterNode[] = JSON.parse(localStorage.getItem('treeOne')) || [];

    this.treeModel = this.treeInitializerService.init(this.treeConfiguration, this.treeOneNodeService, nodes);
  }
}
