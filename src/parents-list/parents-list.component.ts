import {Component, Input, OnInit} from '@angular/core';
import {TreeModel} from '../models/TreeModel';
import {Observable} from 'rxjs/Observable';
import {IOuterNode} from '../interfaces/IOuterNode';

@Component({
  selector: 'ri-tree-parents-list',
  templateUrl: './parents-list.component.html',
  styleUrls: ['./parents-list.component.less']
})
export class ParentsListComponent implements OnInit {
  @Input()
  public treeModel: TreeModel;

  public parents$: Observable<IOuterNode[]>;

  public ngOnInit(): void {
    this.parents$ = this.treeModel.getParentsList();
  }

  public selectNode(node: IOuterNode, isCurrentSelectedNode: boolean): void {
    if (!isCurrentSelectedNode) {
      this.treeModel.currentSelectedNode$.next(node);
    }
  }

}
