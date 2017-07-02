import {ITreeAction, ITreeData, ITreeState} from './ITreeState';
import {Action} from '@ngrx/store';
import {TreeActionsService} from './treeActions.service';
import {IOuterNode} from '../interfaces/IOuterNode';

function copyState(state: ITreeState, treeId: string = null) {
  let newState = {};

  // todo: find better way to clone object
  if (treeId) {
    Object.keys(state)
      .filter((key) => key !== treeId)
      .forEach((key) => newState[key] = state[key]);

    newState[treeId] = {};

    Object.keys(state[treeId])
      .forEach((key) => newState[treeId][key] = state[treeId][key]);
  } else {
    newState = state;
  }

  return newState;
}

function removeNode(state: ITreeState, action: Action): ITreeState {
  const newState = copyState(state, action.payload.treeId);
  const parentId = action.payload.parentId;
  const treeId = action.payload.treeId;
  const treeState = newState[treeId];
  const node = action.payload.node;

  delete treeState[node.id];

  if (parentId) {
    const parent = treeState[node.parentId];

    parent.children.splice(parent.children.indexOf(node.parentId), 1);
  }

  return newState;
}


function loadNodes(state: ITreeState, action: ITreeAction) {
  const newState = copyState(state, action.payload.treeId);
  let parent: IOuterNode | null = null;
  const treeId = action.payload.treeId;
  const parentId = action.payload.id;

  if (parentId) {
    parent = newState[treeId][parentId];
    parent.children = [];
  } else {
    newState[treeId] = {};
  }

  action.payload.nodes.forEach((nodeData: IOuterNode) => {
    nodeData.treeId = treeId;
    if (parent) {
      parent.children.push(nodeData.id);
      nodeData.parents = [...parent.parents, ...[parent.id]];
    } else {
      nodeData.parents = [];
    }

    newState[treeId][nodeData.id] = nodeData;
  });

  return newState;
}


function insertNode(state: ITreeState, action: Action): ITreeState {
  const newState = copyState(state, action.payload.treeId);
  const newNode: IOuterNode = {
    id: null,
    treeId: action.payload.treeId,
    name: 'New node',
    parentId: action.payload.id,
    children: [],
    parents: []
  };

  newState[action.payload.treeId][0] = newNode;

  return newState;
}

function saveNode(state: ITreeState, action: ITreeAction): ITreeState {
  const newState = copyState(state, action.payload.treeId);
  const old = action.payload.oldNode;
  const newNode = action.payload.node;
  const treeId = action.payload.treeId;
  const treeState = newState[treeId];

  if (treeState[0]) {
    delete treeState[0];
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

    newNode.children = Object.keys(state[treeId])
      .filter((key: string) => key === nodeId);
  }

  return newState;
}

function moveNode(state: ITreeState, action: Action) {
  const newState = copyState(state, action.payload.treeId);
  const oldNode = action.payload.source;
  const newNode = action.payload.target;
  const treeId = action.payload.treeId;
  const treeState = newState[treeId];

  // remove old nodes
  delete treeState[oldNode.id];

  // remove info about removed child
  if (oldNode.parentId) {
    const parent = treeState[oldNode.parentId];
    parent.children.splice(parent.children.indexOf(oldNode.id), 1);
  }

  // add node
  treeState[newNode.id] = newNode;

  if (newNode.parentId) {
    const newParent = treeState[newNode.parentId];

    if (newParent.children) {
      newParent.children.push(newNode.id);
    }
    newNode.parents = [...newParent.parents, ...[newParent.id]];
  } else {
    newNode.parents = [];
  }

  return newState;
}

function registerTree(state: ITreeState, action: ITreeAction) {
  const newState = copyState(state);

  newState[action.payload.treeId] = <ITreeData>{};

  return newState;
}

export function treeReducer(state: ITreeState = {}, action: ITreeAction): ITreeState {
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
    case TreeActionsService.TREE_DELETE_NODE:
    case TreeActionsService.TREE_EDIT_NODE_START:
    case TreeActionsService.TREE_EXPAND_NODE:
    case TreeActionsService.TREE_LOAD:
    case TreeActionsService.TREE_MOVE_NODE:
    case TreeActionsService.TREE_SAVE_NODE:
      return state;
    default:
      return state;
  }

}
