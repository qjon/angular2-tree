import { TreeModel } from '../../models/TreeModel';
import { DragAndDrop } from '../dragAndDrop.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/merge';
export declare class DropzoneComponent {
    dragAndDrop: DragAndDrop;
    treeModel: TreeModel;
    dropZone: string[];
    isOpen$: Observable<boolean>;
    constructor(dragAndDrop: DragAndDrop);
    onDrop(): void;
    onDragOver($event: any): void;
}
