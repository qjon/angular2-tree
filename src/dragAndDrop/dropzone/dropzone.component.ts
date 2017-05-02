import {Component, Input} from '@angular/core';
import {TreeModel} from '../../models/TreeModel';
import {DragAndDrop} from '../dragAndDrop.service';
import {IDragElement} from '../../interfaces/IDragAndDrop';

@Component({
  selector: 'ri-dropzone',
  templateUrl: './dropzone.component.html',
  styleUrls: ['./dropzone.component.less']
})
export class DropzoneComponent {
  @Input() treeModel: TreeModel;
  @Input() dropZone: string[] = [];

  public isOpen = false;

  constructor(public dragAndDrop: DragAndDrop) {
    this.dragAndDrop.getDragStream()
      .subscribe((dragElement: IDragElement) => {
        const isDragElement = !!dragElement && !!dragElement.node;
        const isNotRootElement = isDragElement && dragElement.node.parentId;
        const isFromCurrentTree = isDragElement && dragElement.node.treeId === this.treeModel.treeId;

        this.isOpen = (isNotRootElement && isFromCurrentTree) ? true : false;
      });
  }

  public onDrop() {
    this.dragAndDrop.dragEnd(null);
  }

  public onDragOver($event) {
    $event.preventDefault();
  }
}
