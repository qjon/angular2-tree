import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {IDragAndDrop, IDragElement, IDropElement} from '../interfaces/IDragAndDrop';

@Injectable()
export class DragAndDrop {
  public static DROP_DATA_TYPE = 'TREE_NODE';

  protected dropStream$: Subject<IDropElement | null> = new Subject();
  protected dragStream$: BehaviorSubject<IDragElement | null> = new BehaviorSubject(null);

  public drop$ = new Observable();

  public constructor() {
    this.drop$ = this.dropStream$.withLatestFrom(this.dragStream$, (dropNode: IDropElement, dragNode: IDragElement): IDragAndDrop => {
      return {dragNode: dragNode, dropNode: dropNode, type: dragNode.type};
    });
  }

  public dragStart(dragE: IDragElement) {
    this.dragStream$.next(dragE);
  }

  public dragEnd(dropElement: IDropElement | null) {
    this.dropStream$.next(dropElement);
  }

  public getDragStream(): BehaviorSubject<IDragElement | null> {
    return this.dragStream$;
  }

  public getLastDragElement(): IDragElement {
    return this.dragStream$.getValue();
  }
}
