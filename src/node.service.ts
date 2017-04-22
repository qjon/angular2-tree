import {Injectable, Inject} from '@angular/core';
import {Http, URLSearchParams, Response} from '@angular/http';
import {Observable} from 'rxjs';
import {IOuterNode} from './interfaces/IOuterNode';
import {IApiConfig} from './IApiConfig.service';
import {NodeModel} from "./models/NodeModel";

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

  public move(srcNode: NodeModel, targetNode: NodeModel | null): Observable<IOuterNode> {
    let srcId = srcNode.id;
    let targetId = targetNode ? targetNode.id : null;

    return this.http.put(this.getPath('MOVE', srcId, targetId), {source: srcId, target: targetId})
      .map((res: Response) => {
        let body = res.json();

        srcNode.remove();

        if (targetNode) {
          if (targetNode.isExpanded()) {
            targetNode.addChild(body);
            targetNode.reorderChilds();
          }
        } else {
          srcNode.tree.createRootNode(body);
          srcNode.tree.reorderRootNodes();
        }

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
   *
   * Replace in url nodeIds
   *
   * @param type
   * @param nodeId
   * @param destNodeId
   * @returns {void|string|any}
   */
  private getPath(type: string, nodeId: string, destNodeId: string = null) {
    if (!this.apiConfig) {
      throw 'No API configuration for Tree';
    }

    let urlMap = {
      'GET': this.apiConfig.getUrl,
      'CREATE': this.apiConfig.addUrl,
      'REMOVE': this.apiConfig.removeUrl,
      'UPDATE': this.apiConfig.updateUrl,
      'MOVE': this.apiConfig.moveUrl
    };

    let path = urlMap[type].replace('{nodeId}', nodeId);

    if (destNodeId) {
      path = path.replace('{destNodeId}', destNodeId);
    }

    return path;
  }
}
