import {Component, ViewChild, Input, ViewEncapsulation} from '@angular/core';
import {NodeModel} from '../models/NodeModel';
import {FormControl} from '@angular/forms';
import {ContextMenuService} from 'angular2-contextmenu';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'rign-tree-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.less']
})
export class ItemComponent {
  /**
   * Input field where we can change node name
   */
  @ViewChild('inputElement') input: any;

  /**
   * Node instance
   */
  @Input() node: NodeModel;

  /**
   * Form field to change node name
   * @type {FormControl}
   */
  public nameField = new FormControl();

  /**
   * @param contextMenuService
   */
  public constructor(private contextMenuService: ContextMenuService) {
    this.nameField.registerOnChange(() => {
      this.setFocus();
    });
  }

  public onChange(event: KeyboardEvent) {
    event.stopPropagation();

    if (event.keyCode === 27) {
      this.onBlur();
    } else if (event.keyCode === 13) {

      if (this.node.isNew) {
        this.node.isNew = false;
        this.node.onAdd();
      } else {
        this.node.onChangeName();
      }

      this.node.setEditMode(false);
    }
  }

  public onBlur() {
    // TODO: onBlur is fired after onChange
    this.node
      .setEditMode(false)
      .revertName();

    if (this.node.isNew) {
      // Remove not saved item
      this.node.remove();
    }
  }

  /**
   * On open context menu
   * @param $event
   * @param node
   */
  public onContextMenu($event: MouseEvent, node: NodeModel) {
    node.tree.onOpenContextMenu($event, node);

    $event.preventDefault();
    $event.stopPropagation();
  }

  protected setFocus() {
    setTimeout(() => this.input.nativeElement.focus());
  }
}
