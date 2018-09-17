import {Module} from '@nestjs/common';
import {TreeController} from './tree.controller';
import {TreeDataService} from './tree-data.service';

@Module({
  imports: [],
  controllers: [TreeController],
  providers: [TreeDataService],
})
export class TreeModule {
}
