import {EventEmitter} from '@angular/core';
import {NodeModel} from './NodeModel';
import {IOuterNode} from '../interfaces/IOuterNode';
import {ITreeItemEvent} from '../interfaces/ITreeItemEvent';
import {TREE_EVENTS} from '../constants/events';

export class TreeModel {
  private _nodes: Array<NodeModel> = [];
  private _selected: NodeModel = null;
  private events = {};

  public constructor(private _orgNodes: Array<IOuterNode> = null) {
    this.nodes = _orgNodes;
  }

  get nodes() {
    return this._nodes;
  }

  set nodes(nodes: Array<any>) {
    this._nodes = [];

    if (nodes) {
      for (let node of nodes) {
        this._nodes.push(new NodeModel(node, null, this));
      }
    }
  }

  /**
   * Create node and add it to current selected node or as rootNode element
   * @param {IOuterNode} nodeData
   * @returns {NodeModel}
   */
  public addNode(nodeData: IOuterNode): NodeModel {
    let node: NodeModel;

    if (this._selected) {
      node = this._selected.addChild(nodeData);
    } else {
      node = new NodeModel(nodeData, null, this);
      this._nodes.push(node);
    }

    node.isNew = true;

    return node;
  }

  /**
   * Register event on tree
   * @param eventName string
   * @param emitter EventEmitter
   */
  public registerEvent(eventName: string, emitter: EventEmitter<any>) {
    this.events[eventName] = emitter;
  }

  /**
   * Fire different events
   * @param event ITreeItemEvent
   */
  public fireEvent(event: ITreeItemEvent) {
    if (this[event.eventName]) {
      return this[event.eventName](event);
    } else {
      throw `Event ${event.eventName} has not been implemented yet`;
    }
  }

  /**
   * When node is added (name was changed)
   * @param event
   */
  public onAdd(event: ITreeItemEvent) {
    this.events[TREE_EVENTS.onAdd].next(event);
  }

  /**
   * When node change name
   * @param event
   */
  public onChange(event: ITreeItemEvent) {
    this.events[TREE_EVENTS.onChange].next(event);
  }

  /**
   * Fired when user open context menu
   *
   * @param event
   * @param node
   */
  public onOpenContextMenu(event: MouseEvent, node: NodeModel) {
    this.events['onOpenContextMenu'].next({
      event: event,
      item: node
    })
  }

  /**
   * When node is removed
   * @param event
   */
  public onRemove(event: ITreeItemEvent) {
    if (event.node.isSelected) {
      this._selected = null;
    }

    return this.events[TREE_EVENTS.onRemove].emit(event);
  }

  /**
   * When node is selected this event is triggered
   * @param event ITreeItemEvent
   */
  public onSelect(event: ITreeItemEvent) {
    if (this._selected) {
      this._selected.isSelected = false;
    }

    if (this._selected === event.node) {
      this._selected = null;
    } else {
      this._selected = event.node;

      this._selected.isSelected = true;
    }

    event.status = !!this._selected;

    this.events[TREE_EVENTS.onSelect].next(event);
  }

  /**
   * Event fired when node is expanded or collapsed
   * @param event ITreeItemEvent
   */
  public onToggle(event: ITreeItemEvent) {
    if (this._selected) {
      let parentsList: NodeModel[] = this._selected.getParentsList();

      if (parentsList.indexOf(event.node) > -1) {
        this._selected = null;
      }
    }
    this.events[TREE_EVENTS.onToggle].next(event);
  }
}
