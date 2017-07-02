import {Component} from '@angular/core';
import {ItemComponent} from '../../../../main';

@Component({
  selector: 'new-tree-item',
  templateUrl: './newItem.component.html',
  styleUrls: ['./newItem.component.less']
})
export class NewItemComponent extends ItemComponent {
  public onDelete($event: MouseEvent): void {
    this.store.dispatch(this.treeActionsService.deleteNode(this.treeModel.treeId, this.node));
  }

  public onEdit($event: MouseEvent): void {
    this.store.dispatch(this.treeActionsService.editNodeStart(this.node));
  }
}
