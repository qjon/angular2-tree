import {Injectable, Inject} from '@angular/core';
import {Http, URLSearchParams, Response} from '@angular/http';
import {Observable} from 'rxjs';
import {IOuterNode} from './interfaces/IOuterNode';
import {IApiConfig} from './IApiConfig.service';

@Injectable()
export class NodeService {
  protected apiConfig: IApiConfig

  public constructor(private http: Http) {
  }

  public load(nodeId = ''): Observable<IOuterNode[]> {
    let params = new URLSearchParams();
    params.set('nodeId', nodeId);
    let options = {
      search: params
    };
    return this.http.get(this.getPath('GET', nodeId), options)
      .map((res: Response) => {
        let body = res.json();

        return body || [];
      });
  }


  public save(node: IOuterNode, parentNodeId: string = null): Observable<IOuterNode> {
    let data = {
      node: node,
      parentNodeId: parentNodeId
    };
    return this.http.post(this.getPath('CREATE', parentNodeId), data)
      .map((res: Response) => {
        let body = res.json();

        return body || [];
      });
  }


  public update(node: IOuterNode): Observable<IOuterNode> {
    return this.http.put(this.getPath('UPDATE', node.id), node)
      .map((res: Response) => {
        let body = res.json();

        return body || [];
      });
  }


  public remove(nodeId: string): Observable<any> {
    return this.http.delete(this.getPath('REMOVE', nodeId), {body: {nodeId: nodeId}})
      .map((res: Response) => {
        let body = res.json();

        return body || [];
      });
  }

  /**
   * Replace in url {id} to nodeId
   *
   * @param type
   * @param nodeId
   * @returns {string|void}
   */
  private getPath(type: string, nodeId: string) {
    if (!this.apiConfig) {
      throw 'No API configuration for Tree';
    }

    let urlMap = {
      'GET': this.apiConfig.getUrl,
      'CREATE': this.apiConfig.addUrl,
      'REMOVE': this.apiConfig.removeUrl,
      'UPDATE': this.apiConfig.updateUrl
    };

    return urlMap[type].replace('{nodeId}', nodeId);
  }
}
