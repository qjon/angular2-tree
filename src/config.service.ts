import {Injectable} from '@angular/core';

@Injectable()
export class ConfigService {
  public addUrl: string;
  public getUrl: string;
  public updateUrl: string;
  public removeUrl: string;

  public constructor() {
    this.addUrl = '/api/nodes';
    this.getUrl = '/api/nodes';
    this.updateUrl = '/api/nodes';
    this.removeUrl = '/api/nodes';
  }
}
