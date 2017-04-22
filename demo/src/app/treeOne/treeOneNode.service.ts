import {Injectable} from "@angular/core";
import {NodeService, IApiConfig} from "../../../../main";

@Injectable()
export class TreeOneNodeService extends NodeService {
  protected apiConfig: IApiConfig = {
    addUrl: '/api/nodes',
    getUrl: '/api/nodes',
    moveUrl: '/api/nodes/move',
    updateUrl: '/api/nodes',
    removeUrl: '/api/nodes',
  };
}
