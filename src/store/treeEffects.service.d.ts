import { Actions } from '@ngrx/effects';
import { TreeActionsService } from './treeActions.service';
import { IOuterNode } from '../interfaces/IOuterNode';
import { Observable } from 'rxjs/Observable';
import { ITreeAction, ITreeState } from './ITreeState';
import { NodeDispatcherService } from '../service/nodesDispatcher.service';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/combineLatest';
import { Store } from '@ngrx/store';
export declare class TreeEffectsService {
    private actions$;
    private treeActions;
    private nodeDispatcherService;
    private store;
    register$: Observable<ITreeAction>;
    load$: Observable<ITreeAction>;
    delete$: Observable<ITreeAction>;
    save$: Observable<ITreeAction>;
    move$: Observable<ITreeAction>;
    insert$: Observable<ITreeAction>;
    initPathForFullyLoadedTreeEffect$: Observable<any>;
    constructor(actions$: Actions, treeActions: TreeActionsService, nodeDispatcherService: NodeDispatcherService, store: Store<ITreeState>);
    protected deleteNode(treeId: string, node: IOuterNode): Observable<IOuterNode>;
    protected loadNodes(treeId: string, id: string | null): Observable<IOuterNode[]>;
    protected saveNode(treeId: string, node: IOuterNode): Observable<IOuterNode>;
    protected moveNode(treeId: string, source: IOuterNode, target: IOuterNode): Observable<IOuterNode>;
}
