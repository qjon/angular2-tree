import {TreeModel} from './TreeModel';
import {Observable} from 'rxjs/Observable';
import {ITreeData} from '../store/ITreeState';
import {IConfiguration} from '../interfaces/IConfiguration';
import {TreeActionsDispatcherService} from '../store/treeActionsDispatcher.service';
import SpyObj = jasmine.SpyObj;

describe('TreeModel', () => {
  let treeModel: TreeModel;
  let nodesMock$: Observable<ITreeData>;
  let configurationMock: IConfiguration;
  let treeActionDispatcherMock: SpyObj<TreeActionsDispatcherService>;

  beforeEach(() => {
    treeActionDispatcherMock = jasmine.createSpyObj<TreeActionsDispatcherService>('TreeActionsDispatcherService', [
      'loadPath'
    ]);

    configurationMock = {
      disableContextMenu: true
    };

    nodesMock$ = new Observable();

    treeModel = new TreeModel(treeActionDispatcherMock, nodesMock$, configurationMock);
  });

  describe('class constructor', () => {
    it('should init configuration', () => {
      const expectedValue = {
        disableContextMenu: true,
        disableMoveNodes: false,
        dragZone: null,
        dropZone: null,
        treeId: 'tree',
        showAddButton: true,
        isAnimation: false
      };

      expect(configurationMock).toEqual(expectedValue);
    });
  });

  describe('getRootNodes', () => {
    it('should return what getChildren return', () => {
      const expectedValue = Observable.of([]);

      spyOn(treeModel, 'getChildren').and.returnValue(expectedValue)

      expect(treeModel.getRootNodes()).toEqual(expectedValue);
    });
  });

});
