import {IOuterNode} from './IOuterNode';

export interface IDragElement {
  zoneId: string | null;
  node: IOuterNode | null;
}

export interface IDropElement {
  zones: string[] | null;
  node: IOuterNode | null;
}

export interface IDragAndDrop {
  dragNode: IDragElement;
  dropNode: IDropElement;
}
