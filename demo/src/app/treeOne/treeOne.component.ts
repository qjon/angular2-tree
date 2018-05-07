import {Component, OnInit} from '@angular/core';
import {IConfiguration, IContextMenu, ITreeData, TreeModel} from '../../../../main';
import {Observable} from 'rxjs/Observable';
import {TreeModelGeneratorService} from '../../../../src/service/treeModelGenerator.service';
import {IOuterNode} from '../../../../src/interfaces/IOuterNode';
import {NodeDispatcherService} from '../../../../src/service/nodesDispatcher.service';
import {TREE_ONE_ID} from './treeOneNode.service';

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
    treeId: TREE_ONE_ID,
    dragZone: TREE_ONE_ID,
    dropZone: [TREE_ONE_ID],
    isAnimation: true
  };

  public treeModel: TreeModel;

  public constructor(private treeModelGenerator: TreeModelGeneratorService,
                     private nodeDispatcherService: NodeDispatcherService) {
  }

  public ngOnInit() {
    const nodes: IOuterNode[] = JSON.parse(localStorage.getItem('treeOne'));


    this.treeModel = this.treeModelGenerator.createTreeModel(this.treeConfiguration, nodes);
    this.nodeDispatcherService.get(TREE_ONE_ID).setAllNodes(nodes);
    this.treeModel.initPath(['cca2ccca-fcb1-e44d-6623-7cebf40dd05a', 'ed361d54-ee45-09ea-b913-59bca72c531e']);
  }
}
