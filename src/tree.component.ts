import {Component, OnChanges, Input, Output, EventEmitter, ViewEncapsulation} from '@angular/core';
import {IOuterNode} from './interfaces/IOuterNode';
import {IContextMenu} from './interfaces/IContextMenu';
import {TreeModel} from './models/TreeModel';
import {TREE_EVENTS} from './constants/events';
import {NodeModel} from './models/NodeModel';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'ri-tree',
  templateUrl: 'tree.component.html',
  styleUrls: ['tree.component.less']
})
export class TreeComponent implements OnChanges {
  /**
   * list of nodes on which is build the tree
   */
  @Input() nodes: Array<IOuterNode>;
  @Input() showAddButton = false;
  @Input() menu: IContextMenu[] = [];


  @Output() onSelect: any;
  @Output() onToggle: any;
  @Output() onChange: any;
  @Output() onAdd: any;
  @Output() onRemove: any;
  @Output() onContextMenuItemClick: any;

  /**
   * List of default options for context menu
   *
   * @type {{name: string; text: string; iconCls: string}[]}
   */
  private defaultOptions: IContextMenu[] = [
    {
      name: 'onEdit',
      text: 'Edit name',
      iconCls: 'fa fa-edit'
    },
    {
      name: 'onDelete',
      text: 'Remove',
      iconCls: 'fa fa-trash'
    }
  ];

  public tree: TreeModel;

  /**
   * List of context menu items
   *
   * @type {Array}
   */
  public menuList: IContextMenu[] = [];

  public constructor() {
    this.tree = new TreeModel();

    Object.keys(TREE_EVENTS).forEach((eventName: string) => {
      this.tree.registerEvent(eventName, this[eventName] = new EventEmitter());
    });
  }

  public addNode(name = 'New node'): NodeModel {
    let node = this.tree.addNode({id: null, name: name, children: []});
    node.setEditMode(true);
    if (node.parentNode && !node.parentNode.isExpanded()) {
      node.parentNode.expand();
    }

    return node;
  }

  public ngOnChanges() {
    this.tree.nodes = this.nodes;

    this.menuList = [];
    this.defaultOptions.forEach((item) => this.menuList.push(item));

    if (this.menu.length > 0) {
      this.menu.forEach((item) => this.menuList.push(item));
    }
  }

  /**
   * On select item from context menu
   *
   * @param name - name of the event
   * @param node - node item
   */
  public onContextMenuClick(name: string, node: NodeModel) {
    // switch (name) {
    //   case 'onEdit':
    //     event.stopPropagation();
    //     node.setEditMode(true);
    //     break;
    //   case 'onDelete':
    //     node.onRemove();
    //     break;
    //   default:
    //     this.onContextMenuItemClick({eventName: name, node: node});
    // }
  }
}
