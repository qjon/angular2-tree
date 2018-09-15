import {Component, OnInit} from '@angular/core';
import {IConfiguration, IContextMenu, ITreeData, TreeModel} from '../../../../main';
import {Observable} from 'rxjs/Observable';
import {TreeInitializerService} from '../../../../src/service/initializer.service';
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

  public constructor(private treeInitializerService: TreeInitializerService,
                     private treeTwoNodeService: TreeTwoNodeService) {
  }

  public ngOnInit(): void {
    this.treeModel = this.treeInitializerService.init(this.treeConfiguration, this.treeTwoNodeService);
  }
}
