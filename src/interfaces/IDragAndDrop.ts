import {NodeModel} from "../models/NodeModel";

export interface IDragAndDrop {
  dragNode: NodeModel,
  dropNode: NodeModel | null
}
