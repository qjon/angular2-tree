import {Injectable} from '@nestjs/common';
import {IOuterNode} from '../../../src/interfaces/IOuterNode';
import {Partial} from 'rollup-plugin-typescript2/dist/partial';

@Injectable()
export class TreeDataService {
  private lastId = 100;

  private nodes: IOuterNode[] = [
    {
      id: 'node-1',
      name: 'Node 1',
      parentId: null,
      isExpanded: false,
    },
    {
      id: 'node-3',
      name: 'Node 3',
      parentId: null,
      isExpanded: false,
    },
    {
      id: 'node-2',
      name: 'Node 2',
      parentId: null,
      isExpanded: false,
    },
    {
      id: 'node-1-1',
      name: 'Node 1.1',
      parentId: 'node-1',
      isExpanded: false,
    },
  ];

  public getChildren(nodeId: string): IOuterNode[] {
    return this.nodes.filter((item) => item.parentId === nodeId);
  }

  public add(node: Partial<IOuterNode>): IOuterNode {
    const newNode: IOuterNode = {
      id: this.generateNewId(),
      name: node.name,
      parentId: node.parentId,
      treeId: node.treeId,
      isExpanded: false,
    };

    this.nodes.push(newNode);

    return newNode;
  }

  public remove(nodeId: string): boolean {
    const children = this.getChildren(nodeId);

    if (children.length > 0) {
      return false;
    }

    const foundNode = this.nodes.find((item) => item.id === nodeId);
    const index = this.nodes.indexOf(foundNode);

    this.nodes.splice(index, 1);

    return true;
  }

  public update(node: IOuterNode): IOuterNode {
    const foundNode = this.nodes.find((item) => item.id === node.id);
    const index = this.nodes.indexOf(foundNode);

    this.nodes[index] = node;

    return node;
  }

  private generateNewId(): string {
    return `node-${++this.lastId}`;
  }
}
