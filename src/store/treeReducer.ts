import {ITreeAction, ITreeConfiguration, ITreeData, ITreeNodes, ITreeState} from './ITreeState';
import {ITreeConfigurationAction, TreeActionsService} from './treeActions.service';
import {IOuterNode} from '../interfaces/IOuterNode';
import {createFeatureSelector, createSelector} from '@ngrx/store';
import {MemoizedSelector} from '@ngrx/store/src/selector';

export const NEW_NODE_ID = 'ri-new-node-id';

export const emptyTreeData: ITreeData = {
  nodes: {
    entities: {},
    selected: null,
    rootNodes: []
  },
  configuration: {
    isFullyLoaded: false
  }
};

function copyState(state: ITreeState, treeId: string = null) {
  const newState = {...state};

  // todo: find better way to clone object
  if (treeId) {
    newState[treeId] = {
      nodes: {
        entities: {...state[treeId].nodes.entities},
        selected: state[treeId].nodes.selected,
        rootNodes: [...state[treeId].nodes.rootNodes]
      },
      configuration: {...state[treeId].configuration}
    };
  }

  return newState;
}

function removeNode(state: ITreeState, action: ITreeAction): ITreeState {
  const newState = copyState(state, action.payload.treeId);
  const treeId = action.payload.treeId;
  const treeState = newState[treeId];
  const node = action.payload.node;
  const parentId = node.parentId;

  delete treeState.nodes.entities[node.id];

  if (parentId) {
    const parent = treeState.nodes.entities[parentId];

    parent.children = parent.children.filter((id) => id !== node.id);
  } else {
    treeState.nodes.rootNodes = treeState.nodes.rootNodes.filter((id) => id !== node.id);
  }

  return newState;
}


function loadNodes(state: ITreeState, action: ITreeAction) {
  const newState = copyState(state, action.payload.treeId);
  let parent: IOuterNode | null = null;
  const treeId = action.payload.treeId;
  const parentId = action.payload.id;

  if (parentId) {
    parent = newState[treeId].nodes.entities[parentId];
    parent.children = [];
  } else {
    newState[treeId].nodes.entities = {};
  }

  action.payload.nodes.forEach((nodeData: IOuterNode) => {
    nodeData.treeId = treeId;
    if (parent) {
      parent.children.push(nodeData.id);
      nodeData.parents = [...parent.parents, ...[parent.id]];
    } else {
      nodeData.parents = [];
    }

    newState[treeId].nodes.entities[nodeData.id] = nodeData;

    if (!parentId) {
      newState[treeId].nodes.rootNodes.push(nodeData.id);
    }
  });

  return newState;
}


function expandNode(state: ITreeState, action: ITreeAction): ITreeState {
  const treeId = action.payload.treeId;
  const newState = copyState(state, treeId);
  const nodeId = action.payload.id;

  newState[treeId].nodes.entities[nodeId] = Object.assign({}, newState[treeId].nodes.entities[nodeId], {isExpanded: true});

  return newState;
}


function collapseNode(state: ITreeState, action: ITreeAction): ITreeState {
  const newState = copyState(state, action.payload.treeId);
  const nodeId = action.payload.id;

  newState[action.payload.treeId].nodes.entities[nodeId] = Object.assign({}, newState[action.payload.treeId].nodes.entities[nodeId], {isExpanded: false});

  return newState;
}


function insertNode(state: ITreeState, action: ITreeAction): ITreeState {
  const treeId = action.payload.treeId;
  const newState = copyState(state, treeId);
  const parentId = action.payload.id;
  const newNode: IOuterNode = {
    id: NEW_NODE_ID,
    treeId: treeId,
    name: 'New data',
    parentId: parentId,
    children: [],
    parents: [],
    isExpanded: false
  };

  newState[treeId].nodes.entities[NEW_NODE_ID] = newNode;

  console.log('parentId', parentId);

  if (!parentId) {
    newState[treeId].nodes.rootNodes = [...newState[treeId].nodes.rootNodes, NEW_NODE_ID];
  }

  return newState;
}

function saveNode(state: ITreeState, action: ITreeAction): ITreeState {
  const newState = copyState(state, action.payload.treeId);
  const old = action.payload.oldNode;
  const newNode = action.payload.node;
  const treeId = action.payload.treeId;
  const treeState = newState[treeId].nodes.entities;

  if (treeState[NEW_NODE_ID]) {
    delete treeState[NEW_NODE_ID];
  } else {
    delete treeState[old.id];
  }

  const nodeId = newNode.id;
  treeState[nodeId] = newNode;

  const parentId = newNode.parentId;

  if (parentId) {
    if (treeState[parentId]) {
      if (!treeState[parentId].children) {
        treeState[parentId].children = [];
      }

      treeState[parentId].children.push(nodeId);
    }
  } else if (old.id === NEW_NODE_ID) {
    newState[treeId].nodes.rootNodes = newState[treeId].nodes.rootNodes.filter((id) => id !== NEW_NODE_ID);
    newState[treeId].nodes.rootNodes.push(nodeId);
  }

  return newState;
}

function moveNode(state: ITreeState, action: ITreeAction) {
  const newState = copyState(state, action.payload.treeId);
  const oldNode = action.payload.source;
  const newNode = action.payload.target;
  const treeId = action.payload.treeId;
  const treeData = newState[treeId];
  const treeState = newState[treeId].nodes.entities;

  // remove info about removed child
  if (oldNode.parentId) {
    treeState[oldNode.parentId].children = treeState[oldNode.parentId].children.filter((id) => id !== oldNode.id);
  } else {
    treeData.nodes.rootNodes = treeData.nodes.rootNodes.filter((id) => id !== oldNode.id);
  }

  // add info about moved node
  if (newNode.parentId) {
    const newParent = treeState[newNode.parentId];

    if (newParent.children) {
      newParent.children.push(newNode.id);
    }
  } else {
    treeData.nodes.rootNodes.push(newNode.id);
  }

  // replace node data
  treeState[newNode.id] = {...newNode};

  return newState;
}

function registerTree(state: ITreeState, action: ITreeAction) {
  const newState = copyState(state);

  newState[action.payload.treeId] = {
    nodes: {
      entities: {...emptyTreeData.nodes.entities},
      selected: emptyTreeData.nodes.selected,
      rootNodes: [...emptyTreeData.nodes.rootNodes]
    },
    configuration: {...emptyTreeData.configuration}
  };

  return newState;
}


function setAllNodes(state: ITreeState, action: ITreeAction): ITreeState {
  const newState = copyState(state, action.payload.treeId);
  const treeId = action.payload.treeId;
  const nodes = action.payload.nodes;
  const newNodes: ITreeNodes = {};

  nodes.forEach((nodeData: IOuterNode) => {
    nodeData.treeId = treeId;
    newNodes[nodeData.id] = nodeData;

    if (nodeData.parentId === null) {
      newState[treeId].nodes.rootNodes.push(nodeData.id);
    }
  });

  newState[treeId].nodes.entities = newNodes;

  return newState;
}

function markTreeAsFullyLoaded(state: ITreeState, action: ITreeAction): ITreeState {
  const treeId = action.payload.treeId;
  const newState = copyState(state, treeId);

  newState[treeId].configuration = {...newState[treeId].configuration, ...{isFullyLoaded: true}};

  return newState;
}

function setConfiguration(state: ITreeState, action: ITreeConfigurationAction): ITreeState {
  const treeId = action.payload.treeId;
  const newState = copyState(state, treeId);

  newState[treeId].configuration = {...newState[treeId].configuration, ...action.payload.configuration};

  return newState;
}

export function treeReducer(state: ITreeState = {}, action: ITreeAction | ITreeConfigurationAction): ITreeState {
  switch (action.type) {
    case TreeActionsService.TREE_REGISTER:
      return registerTree(state, action);
    case TreeActionsService.TREE_SAVE_NODE_SUCCESS:
      return saveNode(state, action);
    case TreeActionsService.TREE_DELETE_NODE_SUCCESS:
      return removeNode(state, action);
    case TreeActionsService.TREE_INSERT_NODE:
      return insertNode(state, action);
    case TreeActionsService.TREE_LOAD_SUCCESS:
      return loadNodes(state, action);
    case TreeActionsService.TREE_MOVE_NODE_SUCCESS:
      return moveNode(state, action);
    case TreeActionsService.TREE_SET_ALL_NODES:
      return setAllNodes(state, action);
    case TreeActionsService.TREE_MARK_AS_FULLY_LOADED:
      return markTreeAsFullyLoaded(state, action);
    case TreeActionsService.TREE_SET_CONFIGURATION:
      return setConfiguration(state, <ITreeConfigurationAction>action);
    case TreeActionsService.TREE_EXPAND_NODE:
      return expandNode(state, action);
    case TreeActionsService.TREE_COLLAPSE_NODE:
      return collapseNode(state, action);
    case TreeActionsService.TREE_DELETE_NODE:
    case TreeActionsService.TREE_EDIT_NODE_START:
    case TreeActionsService.TREE_LOAD:
    case TreeActionsService.TREE_MOVE_NODE:
    case TreeActionsService.TREE_SAVE_NODE:
      return state;
    default:
      return state;
  }

}

export const treeStateSelector: MemoizedSelector<object, ITreeState> = createFeatureSelector<ITreeState>('trees');

export function treeSelector(treeId: string): MemoizedSelector<object, ITreeData> {
  return createSelector(treeStateSelector, (state: ITreeState) => state[treeId] || null);
}

export function treeConfigurationSelector(treeId: string): MemoizedSelector<object, ITreeConfiguration> {
  return createSelector(treeStateSelector, (state: ITreeState) => state[treeId].configuration || null);
}
