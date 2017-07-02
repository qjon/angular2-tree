import {Injectable} from '@angular/core';
import {INodeService, NodeService} from './node.service';

@Injectable()
export class NodeDispatcherService {
  private services: { [key: string]: INodeService } = {};

  constructor(private nodeService: NodeService) {
    this.services['tree'] = nodeService;
  }

  public register(key: string, service: INodeService): NodeDispatcherService {
    this.services[key] = service;

    return this;
  }

  public unregister(key: string): NodeDispatcherService {
    if (this.services[key]) {
      delete this.services[key];
    } else {
      console.warn('[NodeDispatcherService] No service for key ' + key);
    }

    return this;
  }

  public get(key: string): INodeService {
    if (this.services[key]) {
      return this.services[key];
    } else {
      throw '[NodeDispatcherService] No service for key ' + key;
    }
  }
}
