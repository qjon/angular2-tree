import {Injectable} from '@angular/core';
import {TreeLocalStorageNodeService} from '../localStorage/treeLocalStorage.service';

@Injectable()
export class TreeOneNodeService extends TreeLocalStorageNodeService {
  protected treeName = 'treeOne';


  public get treeId(): string {
    return 'tree3';
  }
}

