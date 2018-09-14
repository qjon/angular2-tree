import {Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res, Response} from '@nestjs/common';
import {IOuterNode} from '../../../src/interfaces/IOuterNode';
import {TreeDataService} from './tree-data.service';

@Controller('tree')
export class TreeController {

  public constructor(private treeData: TreeDataService) {

  }

  @Get()
  public getRoot(): IOuterNode[] {
    return this.treeData.getChildren(null);
  }

  @Get(':id')
  public getChildren(@Param('id') nodeId: string): IOuterNode[] {
    if (nodeId === 'null') {
      return this.getRoot();
    }

    return this.treeData.getChildren(nodeId);
  }

  @Post()
  public add(@Body() node: Partial<IOuterNode>): IOuterNode {
    return this.treeData.add(node);
  }

  @Delete(':id')
  public remove(@Res() response: Response, @Param('id') nodeId: string): any {
    const result = this.treeData.remove(nodeId);

    if (result) {
      response.status(HttpStatus.NO_CONTENT).send();
    } else {
      response.status(HttpStatus.BAD_REQUEST).send();
    }
  }

  @Put(':id')
  public update(@Param('id') nodeId: string, @Body() node: IOuterNode): IOuterNode {
    return this.treeData.update(node);
  }
}
