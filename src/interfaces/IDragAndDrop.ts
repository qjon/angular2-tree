export interface IDragElement {
  zoneId: string | null;
  data: any | null;
  type: string;
}

export interface IDropElement {
  zones: string[] | null;
  node: any | null;
}

export interface IDragAndDrop {
  dragNode: IDragElement;
  dropNode: IDropElement;
  type: string;
}
