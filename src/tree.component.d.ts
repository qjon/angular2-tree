import { OnChanges, OnInit } from '@angular/core';
import { IOuterNode } from './interfaces/IOuterNode';
import { IContextMenu } from './interfaces/IContextMenu';
import { TreeModel } from './models/TreeModel';
import { ContextMenuComponent } from 'ngx-contextmenu';
import { DragAndDrop } from './dragAndDrop/dragAndDrop.service';
import { TreeActionsService } from './store/treeActions.service';
import { Store } from '@ngrx/store';
import { ITreeState } from './store/ITreeState';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
export declare class TreeComponent implements OnInit, OnChanges {
    protected store: Store<ITreeState>;
    protected treeActions: TreeActionsService;
    protected dragAndDrop: DragAndDrop;
    treeModel: TreeModel;
    contextMenu: ContextMenuComponent;
    /**
     * List of default options for context menu
     */
    private defaultOptions;
    /**
     * List of context menu items
     */
    menuList: IContextMenu[];
    rootNodes$: Observable<IOuterNode[]>;
    protected currentSelectedNode: IOuterNode;
    protected subscription: Subscription;
    constructor(store: Store<ITreeState>, treeActions: TreeActionsService, dragAndDrop: DragAndDrop);
    ngOnInit(): void;
    ngOnChanges(data: any): void;
    onAdd(): void;
    /**
     * On select item from context menu
     *
     * @param name - name of the event
     * @param node - data item
     */
    onContextMenuClick(name: string, node: IOuterNode): void;
    /**
     * Register data "move event"
     */
    protected registerMove(): void;
}
