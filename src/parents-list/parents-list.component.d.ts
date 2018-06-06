import { OnInit } from '@angular/core';
import { TreeModel } from '../models/TreeModel';
import { Observable } from 'rxjs/Observable';
import { IOuterNode } from '../interfaces/IOuterNode';
import { TreeActionsDispatcherService } from '../store/treeActionsDispatcher.service';
export declare class ParentsListComponent implements OnInit {
    protected nodeDispatcherService: TreeActionsDispatcherService;
    treeModel: TreeModel;
    parents$: Observable<IOuterNode[]>;
    constructor(nodeDispatcherService: TreeActionsDispatcherService);
    ngOnInit(): void;
    selectNode(node: IOuterNode, isCurrentSelectedNode: boolean): void;
}
