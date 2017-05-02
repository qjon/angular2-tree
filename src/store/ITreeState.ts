import {IOuterNode} from '../interfaces/IOuterNode';
import {Action} from '@ngrx/store';

export interface ITreeData {
  [key: string]: IOuterNode;
}

export interface ITreeState {
  [key: string]: ITreeData;
}

export interface ITreeActionPayload {
  treeId: string;
  url?: string;
  id?: string | null;
  node?: IOuterNode;
  nodes?: IOuterNode[];
  oldNode?: IOuterNode;
  source?: IOuterNode;
  target?: IOuterNode;
}

export interface ITreeAction extends Action {
  payload: ITreeActionPayload;
}
