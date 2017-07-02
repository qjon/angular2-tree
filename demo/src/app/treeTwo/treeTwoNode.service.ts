import {Injectable} from '@angular/core';
import {TreeLocalStorageNodeService} from '../localStorage/treeLocalStorage.service';

@Injectable()
export class TreeTwoNodeService extends TreeLocalStorageNodeService {
  protected treeName = 'treeTwo';
}
