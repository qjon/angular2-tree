import { Test, TestingModule } from '@nestjs/testing';
import { TreeController } from './tree.controller';

describe('Tree Controller', () => {
  let module: TestingModule;
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [TreeController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: TreeController = module.get<TreeController>(TreeController);
    expect(controller).toBeDefined();
  });
});
