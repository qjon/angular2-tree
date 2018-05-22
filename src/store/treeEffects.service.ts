import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {TreeActionsService} from './treeActions.service';
import {IOuterNode} from '../interfaces/IOuterNode';
import {Observable} from 'rxjs/Observable';
import {ITreeAction, ITreeActionPayload, ITreeConfiguration, ITreeState} from './ITreeState';
import {NodeDispatcherService} from '../service/nodesDispatcher.service';
import {DragAndDrop} from '../dragAndDrop/dragAndDrop.service';
import {catchError, filter, map, mergeMap, switchMap, take} from 'rxjs/operators';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/combineLatest';
import {Store} from '@ngrx/store';
import {NEW_NODE_ID, treeConfigurationSelector} from './treeReducer';

@Injectable()
export class TreeEffectsService {
  @Effect()
  public register$ = this.actions$
    .ofType(TreeActionsService.TREE_REGISTER)
    .pipe(
      map((action: ITreeAction): ITreeAction => {
        if (action.payload.silent) {
          return this.treeActions.setAllNodes(action.payload.treeId, action.payload.nodes);
        } else {
          return this.treeActions.loadTree(action.payload.treeId, null)
        }
      })
    );

  @Effect()
  public load$ = this.actions$
    .ofType(TreeActionsService.TREE_LOAD)
    .pipe(
      mergeMap((action: ITreeAction) => this.loadNodes(action.payload.treeId, action.payload.id)
        .pipe(
          map((nodesData: IOuterNode[]): ITreeAction => this.treeActions.loadTreeSuccess(action.payload.treeId, action.payload.id, nodesData)),
          catchError(() => Observable.of(this.treeActions.loadTreeError(action.payload.treeId, action.payload.id)))
        )
      )
    );


  @Effect()
  public delete$ = this.actions$
    .ofType(TreeActionsService.TREE_DELETE_NODE)
    .pipe(
      switchMap((action: ITreeAction) => this.deleteNode(action.payload.treeId, action.payload.node)
        .pipe(
          map((): ITreeAction => this.treeActions.deleteNodeSuccess(action.payload.treeId, action.payload.node)),
          catchError((): Observable<ITreeAction> => Observable.of(this.treeActions.deleteNodeError(action.payload.treeId, action.payload.node)))
        )
      )
    );


  @Effect()
  public save$ = this.actions$
    .ofType(TreeActionsService.TREE_SAVE_NODE)
    .pipe(
      switchMap((action: ITreeAction) => this.saveNode(action.payload.treeId, {...action.payload.node})
        .pipe(
          map((node: IOuterNode): ITreeAction => this.treeActions.saveNodeSuccess(action.payload.treeId, action.payload.node, node)),
          catchError(() => Observable.of(this.treeActions.saveNodeError(action.payload.treeId, action.payload.node)))
        )
      )
    );

  @Effect()
  public move$ = this.actions$
    .ofType(TreeActionsService.TREE_MOVE_NODE)
    .pipe(
      filter((action: ITreeAction) => {
        return action.payload.sourceOfDroppedData === DragAndDrop.DROP_DATA_TYPE;
      }),
      switchMap((action: ITreeAction) => {
          const source = {...action.payload.oldNode};
          const target = Boolean(action.payload.node) ? {...action.payload.node} : null;

          return this.moveNode(action.payload.treeId, source, target)
            .pipe(
              map((node: IOuterNode): ITreeActionPayload => {
                return {
                  treeId: action.payload.treeId,
                  oldNode: action.payload.oldNode,
                  node: node
                };
              }),
              switchMap((data: ITreeActionPayload) => {
                return this.store.select(treeConfigurationSelector(action.payload.treeId))
                  .pipe(
                    take(1),
                    map((configuration: ITreeConfiguration) => {
                      return {
                        configuration,
                        data
                      }
                    })
                  )
              }),
              catchError(() => {
                this.treeActions.moveNodeError(action.payload.treeId, action.payload.oldNode, action.payload.node);

                return Observable.of(action.payload);
              })
            );
        }
      ),
      mergeMap((value: { data: ITreeActionPayload, configuration: ITreeConfiguration }) => {
        const data = value.data;
        const actions = [
          this.treeActions.moveNodeSuccess(data.treeId, data.oldNode, data.node),
        ];

        if (!value.configuration.isFullyLoaded) {
          actions.push(this.treeActions.loadTree(data.treeId, data.node.parentId));
        }

        return actions;
      })
    );

  @Effect()
  public insert$ = this.actions$
    .ofType(TreeActionsService.TREE_INSERT_NODE)
    .pipe(
      map((action: ITreeAction) => {
        return this.treeActions.expandNode(action.payload.treeId, action.payload.id);
      })
    );

  @Effect()
  public initPathForFullyLoadedTreeEffect$ = this.actions$
    .ofType(TreeActionsService.TREE_LOAD_PATH)
    .pipe(
      switchMap((action: ITreeAction) => {
        return this.store.select(treeConfigurationSelector(action.payload.treeId))
          .pipe(
            take(1),
            map((configuration: ITreeConfiguration) => {
              return {action, configuration};
            })
          );
      }),
      map((value: { action: ITreeAction, configuration: ITreeConfiguration }) => {
          const {action, configuration} = value;

          if (configuration.isFullyLoaded) {
            return action.payload.ids.map((id: string) => this.treeActions.expandNode(action.payload.treeId, id));
          } else {
            const loadActions = action.payload.ids.map((id: string) => this.loadNodes(action.payload.treeId, id))
            return Observable.combineLatest(loadActions)
              .pipe(
                take(1),
                mergeMap((data: IOuterNode[][]) => {
                  const loadSuccess = data.map((nodes: IOuterNode[], index) => this.treeActions.loadTreeSuccess(action.payload.treeId, action.payload.ids[index], nodes))
                  const expandNodes = action.payload.ids.map((id: string) => this.treeActions.expandNode(action.payload.treeId, id));

                  return [...loadSuccess, ...expandNodes];
                })
              )
          }
        }
      ),
      mergeMap((actions: any[]) => actions)
    );

  constructor(private actions$: Actions,
              private treeActions: TreeActionsService,
              private nodeDispatcherService: NodeDispatcherService,
              private store: Store<ITreeState>) {
  }

  protected deleteNode(treeId: string, node: IOuterNode): Observable<IOuterNode> {
    const nodeService = this.nodeDispatcherService.get(treeId);

    return node.id ? nodeService.remove(node.id) : Observable.of(node);
  }

  protected loadNodes(treeId: string, id: string | null) {
    const nodeService = this.nodeDispatcherService.get(treeId);

    return nodeService.load(id);
  }

  protected saveNode(treeId: string, node: IOuterNode): Observable<IOuterNode> {
    const nodeService = this.nodeDispatcherService.get(treeId);

    if (node.id === NEW_NODE_ID) {
      return nodeService.add(node, node.parentId);
    } else {
      return nodeService.update(node);
    }
  }

  protected moveNode(treeId: string, source: IOuterNode, target: IOuterNode): Observable<IOuterNode> {
    const nodeService = this.nodeDispatcherService.get(treeId);

    return nodeService.move(source, target);
  }
}
