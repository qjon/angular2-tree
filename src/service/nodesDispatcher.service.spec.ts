import {NodeDispatcherService} from './nodesDispatcher.service';
import {INodeService, NodeService} from './node.service';

describe('NodeDispatcherService', () => {
  const OTHER_SERVICE_NAME = 'other';
  let service: NodeDispatcherService;
  let nodeService: any;
  let nodeService2: any;
  let baseNodeService: any;

  beforeEach(() => {
    nodeService = <NodeService>{
      get treeId(): string {
        return 'tree';
      }
    };
    nodeService2 = <NodeService>{
      get treeId(): string {
        return 'tree2';
      }
    };
    baseNodeService = <INodeService>{
      get treeId(): string {
        return 'tree_base';
      }
    };

    service = new NodeDispatcherService([baseNodeService, nodeService, nodeService2]);
  });

  describe('get', () => {
    it('should return NodeService if passed value is "tree"', () => {
      expect(service.get('tree')).toEqual(nodeService);
    });

    it('should return BaseNodeService if node service is not found', () => {
      expect(service.get('some_tree')).toEqual(baseNodeService);
    });
  });

});
