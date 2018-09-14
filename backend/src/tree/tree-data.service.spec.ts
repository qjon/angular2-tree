import { Test, TestingModule } from '@nestjs/testing';
import { TreeDataService } from './tree-data.service';

describe('TreeDataService', () => {
  let service: TreeDataService;
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TreeDataService],
    }).compile();
    service = module.get<TreeDataService>(TreeDataService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
