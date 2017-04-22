import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {NodeModel} from "../models/NodeModel";
import {IDragAndDrop} from "../interfaces/IDragAndDrop";

@Injectable()
export class DragAndDrop {
  protected dropStream: Subject<NodeModel | null> = new Subject();
  protected dragStream: BehaviorSubject<NodeModel | null> = new BehaviorSubject(null);

  public drop = new Observable();

  public constructor() {
    this.drop = this.dropStream.withLatestFrom(this.dragStream, (dropNode: NodeModel, dragNode: NodeModel): IDragAndDrop => {
      return {dragNode: dragNode, dropNode: dropNode};
    });
  }

  public dragStart(node: NodeModel) {
    this.dragStream.next(node);
  }

  public dragEnd(node: NodeModel | null) {
    this.dropStream.next(node);
  }

  public getDragStream(): BehaviorSubject<NodeModel | null> {
    return this.dragStream;
  }

  public getLastDragElement() {
    return this.dragStream.getValue();
  }
}
