import {Component, OnInit} from '@angular/core';
import {IConfiguration, IContextMenu, ITreeData, TreeModel} from '../../../../main';
import {Observable} from 'rxjs/Observable';
import {TreeOneNodeService} from './treeOneNode.service';
import {TreeModelGeneratorService} from '../../../../src/service/treeModelGenerator.service';
import {IOuterNode} from '../../../../src/interfaces/IOuterNode';

@Component({
  selector: 'app-tree-one',
  templateUrl: './treeOne.component.html'
})
export class TreeOneComponent implements OnInit {
  public folders: Observable<ITreeData>;

  public contextMenu: IContextMenu[] = [];

  public treeConfiguration: IConfiguration = {
    showAddButton: true,
    disableMoveNodes: false,
    treeId: 'tree3',
    dragZone: 'tree3',
    dropZone: ['tree3'],
    isAnimation: true
  };

  public treeModel: TreeModel;

  public constructor(private treeModelGenerator: TreeModelGeneratorService,
                     private nodeService: TreeOneNodeService) {
  }

  public ngOnInit() {
    const nodes: IOuterNode[] = JSON.parse(localStorage.getItem('treeOne'));

    this.nodeService.setAllNodes(nodes);

    this.treeModel = this.treeModelGenerator.createTreeModel(this.treeConfiguration, this.nodeService, nodes);
  }
}
