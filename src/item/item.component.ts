import {AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {FormControl} from '@angular/forms';
import {ContextMenuComponent, ContextMenuService} from 'ngx-contextmenu';
import {IOuterNode} from '../interfaces/IOuterNode';
import {TreeActionsService} from '../store/treeActions.service';
import {Action, Store} from '@ngrx/store';
import {ITreeAction, ITreeState} from '../store/ITreeState';
import {Observable} from 'rxjs/Observable';
import {TreeModel} from '../models/TreeModel';
import {Actions} from '@ngrx/effects';
import {animate, AnimationEvent, state, style, transition, trigger} from '@angular/animations';
import {filter} from 'rxjs/operators';
import {AnimationTriggerMetadata} from '@angular/animations/src/animation_metadata';
import {Subscription} from 'rxjs/Subscription';

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
export class ItemComponent implements OnInit, OnDestroy, AfterViewInit {
  /**
   * Input field where we can change data name
   */
  @ViewChild('inputElement') input: any;

  /**
   * Node instance
   */
  @Input() node: IOuterNode;

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

  public children$: Observable<IOuterNode[]>;


  protected insert$: Observable<Action> = this.actions$
    .ofType(TreeActionsService.TREE_INSERT_NODE)
    .pipe(
      filter((action: ITreeAction) => {
        return action.payload && action.payload.id === this.node.id;
      })
    );

  protected isStartSave = false;

  protected subscription = new Subscription();

  public constructor(protected store: Store<ITreeState>,
                     protected treeActionsService: TreeActionsService,
                     protected contextMenuService: ContextMenuService,
                     protected actions$: Actions) {
    this.subscription.add(
      actions$
        .ofType(TreeActionsService.TREE_EXPAND_NODE)
        .pipe(
          filter((action: ITreeAction): boolean => {
            return !this.isExpanded && action.payload.node && this.node.id === action.payload.node.id;
          })
        )
        .subscribe(() => {
          this.expand();
        })
    );
  }

  public ngAfterViewInit() {
    if (this.isEditMode) {
      this.setFocus();
    }
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public ngOnInit() {
    if (this.treeModel.configuration.isAnimation) {
      this.animationState = 'inactive';
    }

    this.isEditMode = this.node.id === null;

    this.children$ = this.treeModel.getChildren(this.node.id);

    this.insert$
      .pipe(
        filter((action: ITreeAction) => {
          return Boolean(action.payload.id);
        })
      )
      .subscribe(() => {
        this.expand();
      });

    this.treeModel.currentSelectedNode$
      .subscribe((node: IOuterNode) => {
        this.isSelected = (node && node.id === this.node.id) ? true : false;
      });

    this.actions$
      .ofType(TreeActionsService.TREE_EDIT_NODE_START)
      .pipe(
        filter((action: ITreeAction) => action.payload.node === this.node)
      )
      .subscribe((action: ITreeAction) => {
        this.nameField.setValue(this.node.name);
        this.isEditMode = true;
        this.setFocus();
      });

  }

  public collapse() {
    if (this.treeModel.configuration.isAnimation) {
      this.animationState = 'inactive';
    } else {
      this.isExpanded = false;
    }
  }

  public expand() {
    if (this.treeModel.configuration.isAnimation) {
      this.animationState = 'active';
    }

    this.isExpanded = true;

    if (!this.treeModel.isFullyLoaded) {
      this.store.dispatch(this.treeActionsService.loadTree(this.treeModel.treeId, this.node.id));
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
        parents: this.node.parents
      };

      this.store.dispatch(this.treeActionsService.saveNode(this.treeModel.treeId, node));
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

  protected isNewNode() {
    return this.node.id === null;
  }

  protected setFocus() {
    setTimeout(() => this.input.nativeElement.focus());
  }

  protected undoChanges() {
    this.isEditMode = false;

    if (this.isNewNode()) {
      this.store.dispatch(this.treeActionsService.deleteNode(this.treeModel.treeId, this.node));
    }
  }
}
