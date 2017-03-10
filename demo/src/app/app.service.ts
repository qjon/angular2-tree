import {NodeService} from "../../../main";
import {Injectable} from "@angular/core";

@Injectable()
export class AppNodeService extends NodeService {
  protected apiConfig = {
    addUrl: '/api/nodes',
    getUrl: '/api/nodes',
    updateUrl: '/api/nodes',
    removeUrl: '/api/nodes',
  }
}