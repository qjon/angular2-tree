import {Injectable} from '@angular/core';

@Injectable()
export class ConfigService {
  public addUrl: string;
  public getUrl: string;
  public updateUrl: string;
  public removeUrl: string;

  public constructor() {
    this.addUrl = '/api/folder';
    this.getUrl = '/api/folder';
    this.updateUrl = '/api/folder';
    this.removeUrl = '/api/folder';
  }
}
