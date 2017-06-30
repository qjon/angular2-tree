import {Component, OnChanges, Input, ViewEncapsulation, ViewChild, OnInit} from '@angular/core';
import {IOuterNode} from './interfaces/IOuterNode';
import {IContextMenu} from './interfaces/IContextMenu';
import {TreeModel} from './models/TreeModel';
import {ContextMenuComponent} from 'angular2-contextmenu';
import {DragAndDrop} from './dragAndDrop/dragAndDrop.service';
import {IDragAndDrop} from './interfaces/IDragAndDrop';
import {TreeActionsService} from './store/treeActions.service';
import {Store} from '@ngrx/store';
import {ITreeState} from './store/ITreeState';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'rign-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.less']
})
export class TreeComponent implements OnInit, OnChanges {
  @Input() treeModel: TreeModel;

  @ViewChild('contextMenu') contextMenu: ContextMenuComponent;

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

  /**
   * List of context menu items
   *
   * @type {Array}
   */
  public menuList: IContextMenu[] = [];

  public constructor(protected store: Store<ITreeState>,
                     protected treeActions: TreeActionsService,
                     protected dragAndDrop: DragAndDrop) {

  }

  public ngOnInit() {
    this.registerMove();
  }

  public ngOnChanges(data: any) {
    this.menuList = [];
    this.defaultOptions.forEach((item) => this.menuList.push(item));
  }

  public onAdd() {
    const parent = this.treeModel.currentSelectedNode$.getValue();
    const parentId = parent ? parent.id : null;

    this.store.dispatch(this.treeActions.expandNode(this.treeModel.treeId, parent));
    this.store.dispatch(this.treeActions.insertNode(this.treeModel.treeId, parentId));
  }

  /**
   * On select item from context menu
   *
   * @param name - name of the event
   * @param node - node item
   */
  public onContextMenuClick(name: string, node: IOuterNode) {

    switch (name) {
      case 'onEdit':
        event.stopPropagation();
        this.store.dispatch(this.treeActions.editNodeStart(node));
        break;
      case 'onDelete':
        this.store.dispatch(this.treeActions.deleteNode(this.treeModel.treeId, node));
        break;
      default:
        console.warn('Unknown context menu action: ' + name);
    }
  }

  /**
   * Register node "move event"
   */
  protected registerMove(): void {
    if (this.treeModel.configuration.disableMoveNodes) {
      return;
    }

    this.dragAndDrop.drop
      .filter((data: IDragAndDrop) => {
        if (data.dropNode) {
          return data.dropNode.node.treeId === this.treeModel.treeId;
        } else {
          return data.dragNode.node.treeId === this.treeModel.treeId;
        }
      })
      .subscribe((data: IDragAndDrop) => {
        if (data.dropNode && data.dropNode.zones && data.dropNode.zones.indexOf(data.dragNode.zoneId) === -1) {
          return;
        }

        const dropNode = data.dropNode ? data.dropNode.node : null;
        this.store.dispatch(this.treeActions.moveNode(this.treeModel.treeId, data.dragNode.node, dropNode));
      });
  }
}
