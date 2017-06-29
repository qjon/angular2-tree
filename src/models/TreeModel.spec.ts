import {TreeModel} from './TreeModel';
import {Observable} from 'rxjs/Observable';
import {ITreeData} from '../store/ITreeState';
import {IConfiguration} from '../interfaces/IConfiguration';

describe('TreeModel', () => {
  let treeModel: TreeModel;
  let nodesMock$: Observable<ITreeData>;
  let configurationMock: IConfiguration;

  beforeEach(() => {
    configurationMock = {
      disableContextMenu: true
    };

    nodesMock$ = new Observable();

    treeModel = new TreeModel(nodesMock$, configurationMock);
  });

  describe('class constructor', () => {
    it('should init configuration', () => {
      const expectedValue = {
        disableContextMenu: true,
        disableMoveNodes: false,
        dragZone: null,
        dropZone: null,
        treeId: 'tree',
        showAddButton: true
      };

      expect(configurationMock).toEqual(expectedValue);
    });
  });

  describe('getRootNodes', () => {
    it('should return what getChildren return', () => {
      const expectedValue = [];

      spyOn(treeModel, 'getChildren').and.returnValue(expectedValue)

      expect(treeModel.getRootNodes()).toEqual(expectedValue);
    });
  });

});
