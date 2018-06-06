import { IDragElement, IDropElement } from '../interfaces/IDragAndDrop';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/withLatestFrom';
export declare class DragAndDrop {
    static DROP_DATA_TYPE: string;
    protected dropStream$: Subject<IDropElement | null>;
    protected dragStream$: BehaviorSubject<IDragElement | null>;
    drop$: Observable<{}>;
    constructor();
    dragStart(dragElement: IDragElement): void;
    dragEnd(dropElement: IDropElement | null): void;
    getDragStream(): BehaviorSubject<IDragElement | null>;
    getLastDragElement(): IDragElement;
}
