import {Component, ViewChild, Input, ViewEncapsulation} from '@angular/core';
import {NodeModel} from '../models/NodeModel';
import {FormControl} from '@angular/forms';
import {ContextMenuService} from 'angular2-contextmenu';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'tree-item',
  templateUrl: 'item.component.html',
  styleUrls: ['item.component.css']
})
export class ItemComponent {
  @ViewChild('inputElement') input: any;
  @Input() node: NodeModel;

  public nameField = new FormControl();

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
    this.contextMenuService.show.next({
      event: $event,
      item: node
    });
    $event.preventDefault();
    $event.stopPropagation();
  }

  private setFocus() {
    setTimeout(() => this.input.nativeElement.focus());
  }
}
