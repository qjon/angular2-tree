import {IOuterNode} from '../interfaces/IOuterNode';
import {Action} from '@ngrx/store';
import {IConfiguration} from '../interfaces/IConfiguration';

export interface ITreeNodes {
  [key: string]: IOuterNode
}

export interface ITreeData {
  nodes: {
    entities: ITreeNodes;
    selected: string;
    rootNodes: string[];
  };
  configuration: IConfiguration;
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
  hasLoadedNodes?: boolean;
}

export interface ITreeAction extends Action {
  payload: ITreeActionPayload;
}
