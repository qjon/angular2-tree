import {Injectable} from '@angular/core';
import {Http, URLSearchParams, Response} from '@angular/http';
import {Observable} from 'rxjs';
import {IOuterNode} from './interfaces/IOuterNode';
import {ConfigService} from './config.service';

@Injectable()
export class FolderService {

  public constructor(private http: Http, private apiConfig: ConfigService) {
  }

  public load(dirId = ''): Observable<IOuterNode[]> {
    let params = new URLSearchParams();
    params.set('dirId', dirId);
    let options = {
      search: params
    };
    return this.http.get(this.apiConfig.getUrl, options)
      .map((res: Response) => {
        let body = res.json();

        return body || [];
      });
  }


  public save(dir: IOuterNode, parentNodeId: string = null): Observable<IOuterNode> {
    let data = {
      node: dir,
      parentNodeId: parentNodeId
    };
    console.log(data);
    return this.http.post(this.apiConfig.addUrl, data)
      .map((res: Response) => {
        let body = res.json();

        return body || [];
      });
  }


  public update(dir: IOuterNode): Observable<IOuterNode> {
    return this.http.put(this.apiConfig.updateUrl, dir)
      .map((res: Response) => {
        let body = res.json();

        return body || [];
      });
  }


  public remove(dirId: string): Observable<any> {
    return this.http.delete(this.apiConfig.removeUrl, {body: {dirId: dirId}})
      .map((res: Response) => {
        let body = res.json();

        return body || [];
      });
  }

}
