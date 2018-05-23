import {TreeModel} from './TreeModel';
import {ITreeConfiguration, ITreeData} from '../store/ITreeState';
import {IConfiguration} from '../interfaces/IConfiguration';
import {TreeActionsDispatcherService} from '../store/treeActionsDispatcher.service';
import {Subject} from 'rxjs/Subject';
import {IOuterNode} from '../interfaces/IOuterNode';
import SpyObj = jasmine.SpyObj;

describe('TreeModel', () => {
  let service: TreeModel;
  let nodesMock$: Subject<ITreeData>;
  let configurationMock: IConfiguration;
  let treeActionDispatcherMock: SpyObj<TreeActionsDispatcherService>;

  let treeData: ITreeData;
  let configuration: IConfiguration;
  let treeConfiguration: ITreeConfiguration;

  let handler: any;

  beforeEach(() => {
    handler = jasmine.createSpy('handler');

    configuration = {
      disableContextMenu: true,
      disableMoveNodes: false,
      dragZone: null,
      dropZone: null,
      treeId: 'tree',
      showAddButton: true,
      isAnimation: false
    };

    treeConfiguration = {...configuration, ...{isFullyLoaded: true}};

    treeActionDispatcherMock = jasmine.createSpyObj<TreeActionsDispatcherService>('TreeActionsDispatcherService', [
      'loadPath'
    ]);

    configurationMock = {
      disableContextMenu: true
    };

    treeData = {
      nodes: {
        entities: {
          '2f1d260a-5b56-6feb-74fe-f58f42a01b89': {
            id: '2f1d260a-5b56-6feb-74fe-f58f42a01b89',
            isExpanded: false,
            treeId: 'tree2',
            name: 'Tomasz Nowak',
            parentId: null,
            children: []
          },
          '51e309b0-00cd-a0ab-4c1d-f7368601d5a9': {
            id: '51e309b0-00cd-a0ab-4c1d-f7368601d5a9',
            isExpanded: false,
            treeId: 'tree2',
            name: 'abc',
            parentId: null,
            children: []
          },
          '800d4e06-29e9-4153-ebca-3e571f0f9744': {
            id: '800d4e06-29e9-4153-ebca-3e571f0f9744',
            isExpanded: false,
            treeId: 'tree2',
            name: 'ABC 123456789',
            parentId: null,
            children: [
              '92c74860-1989-8e28-27d5-3355cb7dd383',
            ],
            parents: [],
          },
          '92c74860-1989-8e28-27d5-3355cb7dd383': {
            id: '92c74860-1989-8e28-27d5-3355cb7dd383',
            isExpanded: false,
            treeId: 'tree2',
            name: 'Nowe nie tak',
            parentId: '800d4e06-29e9-4153-ebca-3e571f0f9744',
            children: [],
            parents: [],
          },
          '947208df-9b57-97cb-9658-7ee38f2572d0': {
            id: '947208df-9b57-97cb-9658-7ee38f2572d0',
            isExpanded: false,
            treeId: 'tree2',
            name: 'Jan Kowalski',
            parentId: null,
            children: [],
            parents: []
          }
        },
        selected: null,
        rootNodes: [
          '947208df-9b57-97cb-9658-7ee38f2572d0',
          '2f1d260a-5b56-6feb-74fe-f58f42a01b89',
          '51e309b0-00cd-a0ab-4c1d-f7368601d5a9',
          '800d4e06-29e9-4153-ebca-3e571f0f9744',
        ]
      },
      configuration: {...treeConfiguration}
    };

    nodesMock$ = new Subject<ITreeData>();

    service = new TreeModel(treeActionDispatcherMock, nodesMock$.asObservable(), configurationMock);
  });

  describe('class constructor', () => {
    it('should init configuration', () => {
      const expectedValue = {...configuration};

      expect(configurationMock).toEqual(expectedValue);
    });
  });

  describe('rootNodes$', () => {
    it('should return what getChildren return', () => {
      const expectedValue = [
        {
          id: '800d4e06-29e9-4153-ebca-3e571f0f9744',
          isExpanded: false,
          treeId: 'tree2',
          name: 'ABC 123456789',
          parentId: null,
          children: [
            '92c74860-1989-8e28-27d5-3355cb7dd383',
          ],
          parents: [],
        },
        {
          id: '947208df-9b57-97cb-9658-7ee38f2572d0',
          isExpanded: false,
          treeId: 'tree2',
          name: 'Jan Kowalski',
          parentId: null,
          children: [],
          parents: []
        },
        {
          id: '2f1d260a-5b56-6feb-74fe-f58f42a01b89',
          isExpanded: false,
          treeId: 'tree2',
          name: 'Tomasz Nowak',
          parentId: null,
          children: []
        },
        {
          id: '51e309b0-00cd-a0ab-4c1d-f7368601d5a9',
          isExpanded: false,
          treeId: 'tree2',
          name: 'abc',
          parentId: null,
          children: []
        },
      ];

      service.rootNodes$
        .subscribe(handler);

      nodesMock$.next(treeData);

      expect(handler).toHaveBeenCalledWith(expectedValue);
    });
  });

  describe('getChildren', () => {
    it('should return proper list of children', () => {
      const nodeId = '800d4e06-29e9-4153-ebca-3e571f0f9744';
      const children: IOuterNode[] = [
        {
          id: '92c74860-1989-8e28-27d5-3355cb7dd383',
          isExpanded: false,
          treeId: 'tree2',
          name: 'Nowe nie tak',
          parentId: '800d4e06-29e9-4153-ebca-3e571f0f9744',
          children: [],
          parents: [],
        },
      ];
      service.getChildren(nodeId)
        .subscribe(handler);

      nodesMock$.next(treeData);

      expect(handler).toHaveBeenCalledWith(children);
    });
  });

  describe('initPath', () => {
    it('should dispatch load path action', () => {
      const path = ['800d4e06-29e9-4153-ebca-3e571f0f9744'];

      service.initPath(path);

      expect(treeActionDispatcherMock.loadPath).toHaveBeenCalledWith(configuration.treeId, path);
    });
  });


});
