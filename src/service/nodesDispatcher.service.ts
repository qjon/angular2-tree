import {Inject, Injectable} from '@angular/core';
import {INodeService, NODE_SERVICE, NodeService} from './node.service';

@Injectable()
export class NodeDispatcherService {
  constructor(@Inject(NODE_SERVICE) private nodeService: NodeService[]) {
  }

  public get(key: string): INodeService {
    const nodeService: NodeService = this.nodeService.find((service: NodeService) => service.treeId === key);

    if (Boolean(nodeService)) {
      return nodeService;
    } else {
      // default node service provider
      return this.nodeService[0];
    }
  }
}
