import {NodeModel} from '../models/NodeModel';

export interface ITreeItemEvent {
  eventName: string;
  node: NodeModel;
  status?: boolean;
}
