import {Injectable} from '@angular/core';
import {NodeService, IApiConfig} from '../../../../main';

@Injectable()
export class TreeTwoNodeService extends NodeService {
  protected apiConfig: IApiConfig = {
    addUrl: '/api/tree',
    getUrl: '/api/tree',
    moveUrl: '/api/tree/move',
    updateUrl: '/api/tree',
    removeUrl: '/api/tree',
  };
}
