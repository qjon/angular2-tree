import { OnChanges, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ContextMenuComponent, ContextMenuService } from 'ngx-contextmenu';
import { IOuterNode } from '../interfaces/IOuterNode';
import { Observable } from 'rxjs/Observable';
import { TreeModel } from '../models/TreeModel';
import { Actions } from '@ngrx/effects';
import { AnimationEvent } from '@angular/animations';
import { AnimationTriggerMetadata } from '@angular/animations/src/animation_metadata';
import { Subscription } from 'rxjs/Subscription';
import { TreeActionsDispatcherService } from '../store/treeActionsDispatcher.service';
import 'rxjs/add/observable/empty';
export declare function expand(): AnimationTriggerMetadata;
export declare class ItemComponent implements OnInit, OnDestroy, OnChanges {
    protected treeActionsDispatcherService: TreeActionsDispatcherService;
    protected contextMenuService: ContextMenuService;
    protected actions$: Actions;
    /**
     * Input field where we can change data name
     */
    input: any;
    /**
     * Node instance
     */
    node: IOuterNode;
    treeModel: TreeModel;
    contextMenu: ContextMenuComponent;
    /**
     * Form field to change data name
     */
    nameField: FormControl;
    isEditMode: boolean;
    isSelected: boolean;
    isExpanded: boolean;
    animationState: any;
    children$: Observable<IOuterNode[]>;
    protected isStartSave: boolean;
    protected subscription: Subscription;
    protected _node: IOuterNode;
    constructor(treeActionsDispatcherService: TreeActionsDispatcherService, contextMenuService: ContextMenuService, actions$: Actions);
    ngOnChanges(values: any): void;
    ngOnDestroy(): void;
    ngOnInit(): void;
    /**
     * Collapse node
     */
    collapse(): void;
    /**
     * Expand node
     */
    expand(): void;
    onAnimationDone($event: AnimationEvent): void;
    onBlur(): void;
    onChange(event: KeyboardEvent): void;
    onContextMenu($event: MouseEvent): void;
    onSelect(): void;
    protected isNewNode(): boolean;
    protected setFocus(): void;
    protected undoChanges(): void;
    protected markNodeAsExpanded(): void;
    protected markNodeAsCollapsed(): void;
    protected getSubscriptionToExpandNode(): Subscription;
    protected getSubscriptionToCollapseNode(): Subscription;
    protected initEditModeIfNeeded(node: IOuterNode): void;
}
