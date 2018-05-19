import {Component, OnInit} from '@angular/core';
import {IConfiguration, IContextMenu, ITreeData, TreeModel} from '../../../../main';
import {Observable} from 'rxjs/Observable';
import {TreeModelGeneratorService} from '../../../../src/service/treeModelGenerator.service';

@Component({
  selector: 'app-tree-two',
  templateUrl: './treeTwo.component.html',
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

  public constructor(private treeModelGenerator: TreeModelGeneratorService) {
  }

  public ngOnInit() {
    this.treeModel = this.treeModelGenerator.createTreeModel(this.treeConfiguration);
    // this.treeModel.initPath(['800d4e06-29e9-4153-ebca-3e571f0f9744', '30b32b5d-bb90-f4e1-3597-6794d6e93d56']);
  }
}
