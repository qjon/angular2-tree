import { ITreeAction, ITreeConfiguration, ITreeData, ITreeState } from './ITreeState';
import { ITreeConfigurationAction } from './treeActions.service';
import { MemoizedSelector } from '@ngrx/store/src/selector';
export declare const NEW_NODE_ID = "ri-new-node-id";
export declare const emptyTreeData: ITreeData;
export declare function treeReducer(state: ITreeState, action: ITreeAction | ITreeConfigurationAction): ITreeState;
export declare const treeStateSelector: MemoizedSelector<object, ITreeState>;
export declare function treeSelector(treeId: string): MemoizedSelector<object, ITreeData>;
export declare function treeConfigurationSelector(treeId: string): MemoizedSelector<object, ITreeConfiguration>;
