import {IOuterNode} from '../interfaces/IOuterNode';
import {Action} from '@ngrx/store';
import {IConfiguration} from '../interfaces/IConfiguration';

export interface ITreeNodes {
  [key: string]: IOuterNode
}

export interface ITreeConfiguration extends IConfiguration {
  isFullyLoaded: boolean;
}

export interface ITreeData {
  nodes: {
    entities: ITreeNodes;
    selected: string;
    rootNodes: string[];
  };
  configuration: ITreeConfiguration;
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
  sourceOfDroppedData?: string;
  ids?: string[];
  silent?: boolean;
}

export interface ITreeAction extends Action {
  payload: ITreeActionPayload;
}
