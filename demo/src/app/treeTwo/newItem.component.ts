import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ItemComponent, TreeDeleteNodeAction, TreeEditNodeStartAction} from '../../../../main';

@Component({
  selector: 'new-tree-item',
  templateUrl: './newItem.component.html',
  styleUrls: ['./newItem.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewItemComponent extends ItemComponent {
  public onDelete($event: MouseEvent): void {
    this.store.dispatch(new TreeDeleteNodeAction({
      treeId: this.treeModel.treeId,
      node: this.node,
    }));
  }

  public onEdit($event: MouseEvent): void {
    this.store.dispatch(new TreeEditNodeStartAction({
      node: this.node,
    }));
  }
}
