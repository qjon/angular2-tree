import {TreeActionsService} from './treeActions.service';
import {IOuterNode} from '../interfaces/IOuterNode';
import {ITreeAction} from './ITreeState';

describe('TreeActionsService', () => {
  let service: TreeActionsService;
  let treeId: string;
  let id: string;
  let node: IOuterNode;
  let action: ITreeAction;

  beforeEach(() => {
    id = '60b69f7 e-6c77-c92d-1ab5-6c16dff16408';
    treeId = 'tree-id';
    node = {
      id: id,
      treeId: 'tree-id',
      name: 'abc',
      parentId: null,
      children: ['5610ff44-5bf4-e4e7-09f9-f98ddfb7d760', 'acf34b93-0a4e-c533-5167-ce7cc7e35bc8'],
      parents: [],
      isExpanded: false,
    };

    service = new TreeActionsService();
  });

  describe('registerTree', () => {
    it('should return proper registered tree action', () => {
      action = {
        type: TreeActionsService.TREE_REGISTER,
        payload: {treeId, silent: true, nodes: [node]}
      };

      expect(service.registerTree(treeId, true, [node])).toEqual(action);
    });
  });

  describe('editNodeStart', () => {
    it('should return proper edit node start action', () => {
      action = {
        type: TreeActionsService.TREE_EDIT_NODE_START,
        payload: {treeId, node}
      };

      expect(service.editNodeStart(node)).toEqual(action);
    });
  });

  describe('saveNode', () => {
    it('should return proper save node action', () => {
      action = {
        type: TreeActionsService.TREE_SAVE_NODE,
        payload: {treeId, node}
      };

      expect(service.saveNode(treeId, node)).toEqual(action);
    });
  });

  describe('saveNodeSuccess', () => {
    it('should return proper savenode success action', () => {
      const oldNode = Object.assign({}, node);
      oldNode.name = 'Old node name';

      action = {
        type: TreeActionsService.TREE_SAVE_NODE_SUCCESS,
        payload: {treeId, oldNode, node}
      };

      expect(service.saveNodeSuccess(treeId, oldNode, node)).toEqual(action);
    });
  });

  describe('saveNodeError', () => {
    it('should return proper save node error action', () => {
      action = {
        type: TreeActionsService.TREE_SAVE_NODE_ERROR,
        payload: {treeId, node}
      };

      expect(service.saveNodeError(treeId, node)).toEqual(action);
    });
  });

  describe('deleteNode', () => {
    it('should return proper delete node action', () => {
      action = {
        type: TreeActionsService.TREE_DELETE_NODE,
        payload: {treeId, node}
      };

      expect(service.deleteNode(treeId, node)).toEqual(action);
    });
  });

  describe('collapseNode', () => {
    it('should return proper collapse node action', () => {
      action = {
        type: TreeActionsService.TREE_COLLAPSE_NODE,
        payload: {treeId, id}
      };

      expect(service.collapseNode(treeId, id)).toEqual(action);
    });
  });

  describe('expandNode', () => {
    it('should return proper expand node action', () => {
      action = {
        type: TreeActionsService.TREE_EXPAND_NODE,
        payload: {treeId, id}
      };

      expect(service.expandNode(treeId, id)).toEqual(action);
    });
  });

  describe('deleteNodeSuccess', () => {
    it('should return proper delete node success action', () => {
      action = {
        type: TreeActionsService.TREE_DELETE_NODE_SUCCESS,
        payload: {treeId, node}
      };

      expect(service.deleteNodeSuccess(treeId, node)).toEqual(action);
    });
  });

  describe('deleteNodeError', () => {
    it('should return proper delete node error action', () => {
      action = {
        type: TreeActionsService.TREE_DELETE_NODE_ERROR,
        payload: {treeId, node}
      };

      expect(service.deleteNodeError(treeId, node)).toEqual(action);
    });
  });

  describe('insertNode', () => {
    it('should return proper insert node action', () => {
      action = {
        type: TreeActionsService.TREE_INSERT_NODE,
        payload: {treeId, id}
      };

      expect(service.insertNode(treeId, id)).toEqual(action);
    });
  });

  describe('loadTree', () => {
    it('should return proper load tree action', () => {
      action = {
        type: TreeActionsService.TREE_LOAD,
        payload: {treeId, id}
      };

      expect(service.loadTree(treeId, id)).toEqual(action);
    });
  });

  describe('loadTreeError', () => {
    it('should return proper load tree error action', () => {
      action = {
        type: TreeActionsService.TREE_LOAD_ERROR,
        payload: {treeId, id}
      };

      expect(service.loadTreeError(treeId, id)).toEqual(action);
    });
  });

  describe('loadTreeSuccess', () => {
    it('should return proper load tree success action', () => {
      action = {
        type: TreeActionsService.TREE_LOAD_SUCCESS,
        payload: {treeId, id, nodes: [node]}
      };

      expect(service.loadTreeSuccess(treeId, id, [node])).toEqual(action);
    });
  });

  describe('moveNode', () => {
    it('should return proper move node action', () => {
      const type = 'type-of-move';
      const oldNode = Object.assign({}, node);
      oldNode.name = 'Old node name';

      action = {
        type: TreeActionsService.TREE_MOVE_NODE,
        payload: {sourceOfDroppedData: type, treeId, oldNode, node}
      };

      expect(service.moveNode(type, treeId, oldNode, node)).toEqual(action);
    });
  });

  describe('moveNodeSuccess', () => {
    it('should return proper move node success action', () => {
      const source = Object.assign({}, node);
      source.name = 'Old node name';

      action = {
        type: TreeActionsService.TREE_MOVE_NODE_SUCCESS,
        payload: {treeId, source: source, target: node}
      };

      expect(service.moveNodeSuccess(treeId, source, node)).toEqual(action);
    });
  });

  describe('moveNodeError', () => {
    it('should return proper move node error action', () => {
      const source = Object.assign({}, node);
      source.name = 'Old node name';

      action = {
        type: TreeActionsService.TREE_MOVE_NODE_ERROR,
        payload: {treeId, source: source, target: node}
      };

      expect(service.moveNodeError(treeId, source, node)).toEqual(action);
    });
  });

  describe('setAllNodes', () => {
    it('should return proper set all nodes action', () => {
      action = {
        type: TreeActionsService.TREE_SET_ALL_NODES,
        payload: {treeId, nodes: [node]}
      };

      expect(service.setAllNodes(treeId, [node])).toEqual(action);
    });
  });

  describe('loadPath', () => {
    it('should return proper load path action', () => {
      action = {
        type: TreeActionsService.TREE_LOAD_PATH,
        payload: {treeId, ids: [id], hasLoadedNodes: false}
      };

      expect(service.loadPath(treeId, [id])).toEqual(action);
    });
  });


});
