import {Component, Input} from '@angular/core';
import {DragAndDrop} from "../dragAndDrop.service";
import {TreeModel} from "../../models/TreeModel";

@Component({
  selector: 'ri-dropzone',
  templateUrl: './dropzone.component.html',
  styleUrls: ['./dropzone.component.less']
})
export class DropzoneComponent {
  @Input() tree: TreeModel;

  public isOpen = false;

  constructor(public dragAndDrop: DragAndDrop) {
    this.dragAndDrop.getDragStream()
      .subscribe((node: any) => {
        this.isOpen = !!node && node.tree === this.tree && node.parentNode;
      });
  }

  public onDrop() {
    this.dragAndDrop.dragEnd(null);
  }

  public onDragOver($event) {
    $event.preventDefault();
  }
}
