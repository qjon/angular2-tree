import {Component, OnInit} from '@angular/core';
import {IConfiguration, IContextMenu, ITreeData, TreeModel} from '../../../../main';
import {Observable} from 'rxjs/Observable';
import {TreeTwoNodeService} from './treeTwoNode.service';
import {TreeModelGeneratorService} from '../../../../src/service/treeModelGenerator.service';

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

  public constructor(private treeModelGenerator: TreeModelGeneratorService,
                     private nodeService: TreeTwoNodeService) {
  }

  public ngOnInit() {
    this.treeModel = this.treeModelGenerator.createTreeModel(this.treeConfiguration, this.nodeService);
  }
}
