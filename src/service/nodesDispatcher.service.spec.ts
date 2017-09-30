import {NodeDispatcherService} from './nodesDispatcher.service';
import {INodeService, NodeService} from './node.service';

describe('NodeDispatcherService', () => {
  const OTHER_SERVICE_NAME = 'other';
  let service: NodeDispatcherService;
  let nodeService: any;
  let otherNodeService: any;

  beforeEach(() => {
    nodeService = <NodeService>{};
    otherNodeService = <INodeService>{};

    service = new NodeDispatcherService(nodeService);
  });

  describe('register', () => {
    it('should register new node service', () => {
      service.register(OTHER_SERVICE_NAME, otherNodeService);

      expect(service.get(OTHER_SERVICE_NAME)).toEqual(otherNodeService);
    });
  });

  describe('unregister', () => {
    it('should unregistred "other" service', () => {
      service.register(OTHER_SERVICE_NAME, otherNodeService);
      expect(service.get(OTHER_SERVICE_NAME)).toEqual(otherNodeService);

      service.unregister(OTHER_SERVICE_NAME);
      expect(() => {
        service.get(OTHER_SERVICE_NAME)
      })
        .toThrow('[NodeDispatcherService] No service for key ' + OTHER_SERVICE_NAME);
    });

    it('should throw exception if service not found', () => {
      service.register(OTHER_SERVICE_NAME, otherNodeService);
      expect(service.get(OTHER_SERVICE_NAME)).toEqual(otherNodeService);

      spyOn(console, 'warn');
      service.unregister('some_name');

      expect(console.warn).toHaveBeenCalledWith('[NodeDispatcherService] No service for key some_name');
    });
  });

});
