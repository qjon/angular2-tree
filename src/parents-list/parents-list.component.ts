import {Component, Input, OnChanges, OnDestroy, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {FormControl} from '@angular/forms';
import {ContextMenuComponent, ContextMenuService} from 'ngx-contextmenu';
import {IOuterNode} from '../interfaces/IOuterNode';
import {TreeActionsService} from '../store/treeActions.service';
import {ITreeAction} from '../store/ITreeState';
import {Observable} from 'rxjs/Observable';
import {TreeModel} from '../models/TreeModel';
import {Actions} from '@ngrx/effects';
import {animate, AnimationEvent, state, style, transition, trigger} from '@angular/animations';
import {filter} from 'rxjs/operators';
import {AnimationTriggerMetadata} from '@angular/animations/src/animation_metadata';
import {Subscription} from 'rxjs/Subscription';
import {TreeActionsDispatcherService} from '../store/treeActionsDispatcher.service';
import 'rxjs/add/observable/empty';

export function expand(): AnimationTriggerMetadata {
  return trigger('isExpanded', [
    state('inactive', style({
      height: 0,
      opacity: 0,
      transform: 'scaleY(0)'
    })),
    state('active', style({
      transform: 'scaleY(1)'
    })),
    transition('inactive => active', animate('300ms')),
    transition('active => inactive', animate('300ms'))
  ]);
}

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'ri-tree-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.less'],
  animations: [expand()]
})
export class ItemComponent implements OnInit, OnDestroy, OnChanges {
  /**
   * Input field where we can change data name
   */
  @ViewChild('inputElement') input: any;

  /**
   * Node instance
   */
  @Input()
  public set node(node: IOuterNode) {
    this._node = node;

    this.initEditModeIfNeeded(node);
  }

  public get node(): IOuterNode {
    return this._node;
  }

  @Input() treeModel: TreeModel;

  @Input() contextMenu: ContextMenuComponent;

  /**
   * Form field to change data name
   */
  public nameField = new FormControl();

  public isEditMode = false;
  public isSelected = false;
  public isExpanded = false;
  public animationState = null;

  public children$: Observable<IOuterNode[]> = Observable.empty();

  protected isStartSave = false;

  protected subscription = new Subscription();

  protected _node: IOuterNode;

  public constructor(protected treeActionsDispatcherService: TreeActionsDispatcherService,
                     protected contextMenuService: ContextMenuService,
                     protected actions$: Actions) {
  }

  public ngOnChanges(values): void {
    // if node is added to the tree then some part of nodes is moving down
    // and the new one is inserted, then all sub nodes should be rewritten
    const node = values.node;
    if (node && !node.firstChange && node.previousValue.id !== node.currentValue.id) {
      this.children$ = this.treeModel.getChildren(this.node.id);

      if (this.node.isExpanded) {
        this.markNodeAsExpanded();
      }
    }
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public ngOnInit() {
    this.markNodeAsCollapsed();

    this.children$ = this.treeModel.getChildren(this.node.id);

    if (this.node.isExpanded) {
      this.markNodeAsExpanded();
    }

    this.subscription.add(this.getSubscriptionToExpandNode());
    this.subscription.add(this.getSubscriptionToCollapseNode());

    // @todo: rewrite it to node property in IOuterNode
    this.subscription.add(
      this.treeModel.currentSelectedNode$
        .subscribe((node: IOuterNode) => {
          this.isSelected = (node && node.id === this.node.id) ? true : false;
        })
    );

    this.subscription.add(
      this.actions$
        .ofType(TreeActionsService.TREE_EDIT_NODE_START)
        .pipe(
          filter((action: ITreeAction) => action.payload.node === this.node)
        )
        .subscribe((action: ITreeAction) => {
          this.nameField.setValue(this.node.name);
          this.isEditMode = true;
          this.setFocus();
        })
    );
  }

  /**
   * Collapse node
   */
  public collapse(): void {
    this.treeActionsDispatcherService.collapseNode(this.treeModel.treeId, this.node.id);
  }

  /**
   * Expand node
   */
  public expand(): void {
    this.treeActionsDispatcherService.expandNode(this.treeModel.treeId, this.node.id);

    if (!this.treeModel.isFullyLoaded) {
      this.treeActionsDispatcherService.loadTree(this.treeModel.treeId, this.node.id);
    }
  }

  public onAnimationDone($event: AnimationEvent): void {
    if ($event.toState === 'inactive') {
      this.isExpanded = false;
    }
  }

  public onBlur() {
    if (this.isStartSave) {
      this.isStartSave = false;
    } else {
      this.undoChanges();
    }
  }

  public onChange(event: KeyboardEvent) {
    event.stopPropagation();

    if (event.keyCode === 27) {
      this.undoChanges();
    } else if (event.keyCode === 13) {
      this.isStartSave = true;
      const node: IOuterNode = {
        id: this.node.id,
        treeId: this.node.treeId,
        name: this.nameField.value,
        parentId: this.node.parentId,
        children: this.node.children,
        parents: this.node.parents,
        isExpanded: false
      };

      this.treeActionsDispatcherService.saveNode(this.treeModel.treeId, node);
      this.isEditMode = false;
    }
  }

  public onContextMenu($event: MouseEvent) {
    if (!this.treeModel.configuration.disableContextMenu) {
      this.contextMenuService.show.next({
        contextMenu: this.contextMenu,
        event: $event,
        item: this.node
      });
    }

    $event.preventDefault();
    $event.stopPropagation();
  }

  public onSelect() {
    this.treeModel.currentSelectedNode$.next(this.isSelected ? null : this.node);
  }

  public trackByFn(node: IOuterNode): string {
    return node.id;
  }

  protected isNewNode() {
    return this.node.id === null;
  }

  protected setFocus() {
    setTimeout(() => this.input.nativeElement.focus(), 0);
  }

  protected undoChanges() {
    this.isEditMode = false;

    if (this.isNewNode()) {
      this.treeActionsDispatcherService.deleteNode(this.treeModel.treeId, this.node);
    }
  }

  protected markNodeAsExpanded(): void {
    if (this.treeModel.configuration.isAnimation) {
      this.animationState = 'active';
    }

    this.isExpanded = true;
  }

  protected markNodeAsCollapsed(): void {
    if (this.treeModel.configuration.isAnimation) {
      this.animationState = 'inactive';
    }
  }

  protected getSubscriptionToExpandNode() {
    return this.actions$
      .ofType(TreeActionsService.TREE_EXPAND_NODE)
      .pipe(
        filter((action: ITreeAction): boolean => {
          return !this.isExpanded
            && action.payload.treeId === this.treeModel.treeId
            && this.node.id === action.payload.id;
        })
      )
      .subscribe(() => {
        this.markNodeAsExpanded();
        this.isExpanded = true;
      });
  }

  protected getSubscriptionToCollapseNode() {
    return this.actions$
      .ofType(TreeActionsService.TREE_COLLAPSE_NODE)
      .pipe(
        filter((action: ITreeAction): boolean => {
          return this.isExpanded
            && action.payload.treeId === this.treeModel.treeId
            && this.node.id === action.payload.id;
        })
      )
      .subscribe(() => {
        this.markNodeAsCollapsed();
      });
  }

  protected initEditModeIfNeeded(node: IOuterNode) {
    this.isEditMode = node.id === null;

    if (this.isEditMode) {
      this.nameField.setValue('');
      this.setFocus();
    }
  }
}
