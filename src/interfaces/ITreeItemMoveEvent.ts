import {NodeModel} from "../models/NodeModel";

export interface ITreeItemMoveEvent {
  source: NodeModel,
  target: NodeModel
}
