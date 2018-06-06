import { INodeService, NodeService } from './node.service';
export declare class NodeDispatcherService {
    private nodeService;
    constructor(nodeService: NodeService[]);
    get(key: string): INodeService;
}
