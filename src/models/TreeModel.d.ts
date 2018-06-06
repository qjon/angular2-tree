import { IOuterNode } from '../interfaces/IOuterNode';
import { Observable } from 'rxjs/Observable';
import { IConfiguration } from '../interfaces/IConfiguration';
import { ITreeData, ITreeNodes } from '../store/ITreeState';
import { TreeActionsDispatcherService } from '../store/treeActionsDispatcher.service';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/do';
export declare class TreeModel {
    private treeActionDispatcher;
    private treeData$;
    configuration: IConfiguration;
    private _fullyLoaded;
    readonly treeId: string;
    readonly isFullyLoaded: boolean;
    nodes$: Observable<ITreeNodes>;
    rootNodes$: Observable<IOuterNode[]>;
    currentSelectedNode$: Observable<IOuterNode>;
    constructor(treeActionDispatcher: TreeActionsDispatcherService, treeData$: Observable<ITreeData>, configuration: IConfiguration, _fullyLoaded?: boolean);
    getParentsList(): Observable<IOuterNode[]>;
    getChildren(nodeId: string | null): Observable<IOuterNode[]>;
    initPath(path: string[]): void;
    private initConfiguration();
    private getNodesByParentId(state, id);
    private sortNodes(first, second);
}
