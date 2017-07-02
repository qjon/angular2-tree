import {Injectable, Inject} from '@angular/core';
import {Http, URLSearchParams, Response} from '@angular/http';
import {Observable} from 'rxjs';
import {IOuterNode} from '../interfaces/IOuterNode';
import {IApiConfig} from '../IApiConfig.service';

export interface INodeService {
  load(nodeId: string): Observable<IOuterNode[]>;
  add(node: IOuterNode, parentNodeId: string | null): Observable<IOuterNode>;
  move(srcNode: IOuterNode, targetNode: IOuterNode | null): Observable<IOuterNode>;
  update(node: IOuterNode): Observable<IOuterNode>;
  remove(nodeId: string): Observable<IOuterNode>;
}

@Injectable()
export class NodeService implements INodeService {
  protected apiConfig: IApiConfig = {
    addUrl: '/api/nodes',
    getUrl: '/api/nodes',
    moveUrl: '/api/nodes/move',
    updateUrl: '/api/nodes',
    removeUrl: '/api/nodes',
  };

  public constructor(protected http: Http) {
  }

  public load(nodeId = ''): Observable<IOuterNode[]> {
    const params = new URLSearchParams();
    params.set('nodeId', nodeId);
    const options = {
      search: params
    };
    return this.http.get(this.getPath('GET', nodeId), options)
      .map((res: Response) => {
        const body = res.json();

        return body || [];
      });
  }


  public add(node: IOuterNode, parentNodeId: string = null): Observable<IOuterNode> {
    const data = {
      node: node,
      parentNodeId: parentNodeId
    };
    return this.http.post(this.getPath('CREATE', parentNodeId), data)
      .map((res: Response) => {
        const body = res.json();

        return body || [];
      });
  }

  public move(srcNode: IOuterNode, targetNode: IOuterNode | null): Observable<IOuterNode> {
    const srcId = srcNode.id;
    const targetId = targetNode ? targetNode.id : null;

    return this.http.put(this.getPath('MOVE', srcId, targetId), {source: srcId, target: targetId})
      .map((res: Response) => {
        const body = res.json();

        return body || [];
      });
  }

  public update(node: IOuterNode): Observable<IOuterNode> {
    return this.http.put(this.getPath('UPDATE', node.id), node)
      .map((res: Response) => {
        const body = res.json();

        return body || [];
      });
  }

  public remove(nodeId: string): Observable<IOuterNode> {
    return this.http.delete(this.getPath('REMOVE', nodeId), {body: {nodeId: nodeId}})
      .map((res: Response) => {
        const body = res.json();

        return body || [];
      });
  }

  /**
   *
   * Replace in url nodeIds
   *
   * @param type
   * @param nodeId
   * @param destNodeId
   * @returns {void|string|any}
   */
  protected getPath(type: string, nodeId: string, destNodeId: string = null) {
    if (!this.apiConfig) {
      throw 'No API configuration for Tree';
    }

    const urlMap = {
      'GET': this.apiConfig.getUrl,
      'CREATE': this.apiConfig.addUrl,
      'REMOVE': this.apiConfig.removeUrl,
      'UPDATE': this.apiConfig.updateUrl,
      'MOVE': this.apiConfig.moveUrl
    };

    let path = this.replaceNodeId(urlMap[type], nodeId);

    if (destNodeId) {
      path = this.replaceDestNodeId(path, destNodeId);
    }

    return path;
  }

  protected replaceNodeId(url: string, nodeId: string) {
    return url.replace('{nodeId}', nodeId);
  }

  protected replaceDestNodeId(url: string, nodeId: string) {
    return url.replace('{destNodeId}', nodeId);
  }
}
