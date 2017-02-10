import {TreeModel} from './TreeModel';
import {TREE_EVENTS} from '../constants/events';
import {ITreeItemEvent} from '../interfaces/ITreeItemEvent';
import {IOuterNode} from '../interfaces/IOuterNode';

export class NodeModel {
  private _name = '';
  private _children: Array<NodeModel> = [];
  private _open = false;
  private editMode = false;
  private _isSelected = false;
  private _isNew = false;

  public constructor(private orgData: IOuterNode, private parent: NodeModel = null, private treeModel: TreeModel) {
    this.name = orgData.name;

    if (orgData.children && orgData.children.length > 0) {
      for (let child of orgData.children) {
        this.addChild(child);
      }
    }
  }

  get id() {
    return this.orgData.id;
  }

  get name() {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
  }

  get children() {
    return this._children;
  }

  get data() {
    return this.orgData;
  }

  get parentNode() {
    return this.parent;
  }

  get tree() {
    return this.treeModel;
  }

  set isSelected(select: boolean) {
    this._isSelected = select;
  }

  get isSelected() {
    return this._isSelected;
  }

  get isNew() {
    return this._isNew;
  }

  set isNew(value: boolean) {
    this._isNew = value;
  }

  /**
   * Add child to node
   *
   * @param data
   * @returns {NodeModel}
   */
  public addChild(data: IOuterNode) {
    let child = new NodeModel(data, this, this.tree);

    this._children.push(child);

    return child;
  }

  /**
   * Collapse node
   *
   * @param silent
   */
  public collapse(silent = false) {
    this._open = false;

    if (this.hasChildren()) {
      for (let child of this.children) {
        child.collapse(true);
      }
    }

    if (!silent) {
      this.fireEvent({eventName: TREE_EVENTS.onToggle, node: this, status: false});
    }
  }

  /**
   * Expand current node and fire event onToggle
   */
  public expand() {
    this._open = true;
    this.fireEvent({eventName: TREE_EVENTS.onToggle, node: this, status: true});
  }

  /**
   * Fire event
   *
   * @param event
   * @returns {any}
   */
  public fireEvent(event: ITreeItemEvent) {
    return this.tree.fireEvent(event);
  }

  /**
   * Return list of parent nodes
   * @returns {NodeModel[]}
   */
  public getParentsList(): NodeModel[] {
    let parentsList: NodeModel[] = [];

    if (this.parent) {
      parentsList = this.parent.getParentsList();
      parentsList = parentsList.concat([this.parent]);
    }

    return parentsList;
  }

  /**
   * Return if current node has children or not
   *
   * @returns {boolean}
   */
  public hasChildren(): boolean {
    return this.children.length > 0;
  }

  /**
   * Return if current node is expanded or not
   * @returns {boolean}
   */
  public isExpanded(): boolean {
    return this._open;
  }

  /**
   * Remove current node from structure
   */
  public remove() {
    if (this.parent) {
      let index = this.parent.children.indexOf(this);
      this.parent.children.splice(index, 1);
    } else {
      let index = this.tree.nodes.indexOf(this);

      if (index > -1) {
        this.tree.nodes.splice(index, 1);
      }
    }
  }

  /**
   * Update node by new data
   *
   * @param data
   */
  public refresh(data: IOuterNode) {
    this.orgData = data;
    this.name = data.name;
  }

  /**
   * Reset list of children to empty array
   */
  public resetChildren() {
    this._children = [];
  }

  /**
   * Revert current name of node from original data
   *
   * @returns {NodeModel}
   */
  public revertName() {
    this.name = this.orgData.name;

    return this;
  }

  /**
   * Mark node state as EDIT
   *
   * @param mode
   * @returns {NodeModel}
   */
  public setEditMode(mode: boolean) {
    this.editMode = mode;

    return this;
  }

  /**
   * Map node to JSON structure
   *
   * @returns {IOuterNode}
   */
  public toJSON(): IOuterNode {
    let data: IOuterNode = {
      id: this.id,
      name: this.name
    };

    return data;
  }

  public onAdd() {
    this.orgData.name = this.name;

    this.fireEvent({eventName: TREE_EVENTS.onAdd, node: this});
  }

  public onChangeName() {
    this.fireEvent({eventName: TREE_EVENTS.onChange, node: this});
  }

  public onRemove() {
    this.fireEvent({eventName: TREE_EVENTS.onRemove, node: this});
  }

  public onSelect() {
    this.fireEvent({eventName: TREE_EVENTS.onSelect, node: this});
  }
}
