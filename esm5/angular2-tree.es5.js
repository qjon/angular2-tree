import { Injectable, Component, Input, ViewChild, ViewEncapsulation, Directive, ElementRef, Renderer, InjectionToken, Inject, CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { createFeatureSelector, createSelector, Store, StoreModule } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { distinctUntilChanged, map, filter, catchError, mergeMap, switchMap, take } from 'rxjs/operators';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/do';
import * as _isEqual from 'lodash.isequal';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContextMenuService, ContextMenuModule } from 'ngx-contextmenu';
import { Actions, Effect, EffectsModule } from '@ngrx/effects';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/observable/empty';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/observable/merge';
import { HttpClient, HttpParams, HttpClientModule } from '@angular/common/http';
import 'rxjs/add/observable/of';
import { CommonModule } from '@angular/common';
import { DndModule, DraggableComponent } from 'ng2-dnd';
import { TranslateModule, TranslateService } from 'ng2-translate';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TreeActionsService = /** @class */ (function () {
    function TreeActionsService() {
    }
    /**
     * @param {?} treeId
     * @param {?=} silent
     * @param {?=} nodes
     * @return {?}
     */
    TreeActionsService.prototype.registerTree = /**
     * @param {?} treeId
     * @param {?=} silent
     * @param {?=} nodes
     * @return {?}
     */
    function (treeId, silent, nodes) {
        if (silent === void 0) { silent = false; }
        if (nodes === void 0) { nodes = []; }
        return {
            type: TreeActionsService.TREE_REGISTER,
            payload: { treeId: treeId, silent: silent, nodes: nodes }
        };
    };
    /**
     * @param {?} node
     * @return {?}
     */
    TreeActionsService.prototype.editNodeStart = /**
     * @param {?} node
     * @return {?}
     */
    function (node) {
        return {
            type: TreeActionsService.TREE_EDIT_NODE_START,
            payload: {
                node: node,
                treeId: node.treeId
            }
        };
    };
    /**
     * @param {?} treeId
     * @param {?} node
     * @return {?}
     */
    TreeActionsService.prototype.saveNode = /**
     * @param {?} treeId
     * @param {?} node
     * @return {?}
     */
    function (treeId, node) {
        return {
            type: TreeActionsService.TREE_SAVE_NODE,
            payload: {
                treeId: treeId,
                node: node
            }
        };
    };
    /**
     * @param {?} treeId
     * @param {?} oldNode
     * @param {?} node
     * @return {?}
     */
    TreeActionsService.prototype.saveNodeSuccess = /**
     * @param {?} treeId
     * @param {?} oldNode
     * @param {?} node
     * @return {?}
     */
    function (treeId, oldNode, node) {
        return {
            type: TreeActionsService.TREE_SAVE_NODE_SUCCESS,
            payload: {
                treeId: treeId,
                oldNode: oldNode,
                node: node
            }
        };
    };
    /**
     * @param {?} treeId
     * @param {?} node
     * @return {?}
     */
    TreeActionsService.prototype.saveNodeError = /**
     * @param {?} treeId
     * @param {?} node
     * @return {?}
     */
    function (treeId, node) {
        return {
            type: TreeActionsService.TREE_SAVE_NODE_ERROR,
            payload: {
                treeId: treeId,
                node: node
            }
        };
    };
    /**
     * @param {?} treeId
     * @param {?} node
     * @return {?}
     */
    TreeActionsService.prototype.deleteNode = /**
     * @param {?} treeId
     * @param {?} node
     * @return {?}
     */
    function (treeId, node) {
        return {
            type: TreeActionsService.TREE_DELETE_NODE,
            payload: {
                treeId: treeId,
                node: node
            }
        };
    };
    /**
     * @param {?} treeId
     * @param {?} id
     * @return {?}
     */
    TreeActionsService.prototype.collapseNode = /**
     * @param {?} treeId
     * @param {?} id
     * @return {?}
     */
    function (treeId, id) {
        return {
            type: TreeActionsService.TREE_COLLAPSE_NODE,
            payload: { treeId: treeId, id: id }
        };
    };
    /**
     * @param {?} treeId
     * @param {?} id
     * @return {?}
     */
    TreeActionsService.prototype.expandNode = /**
     * @param {?} treeId
     * @param {?} id
     * @return {?}
     */
    function (treeId, id) {
        return {
            type: TreeActionsService.TREE_EXPAND_NODE,
            payload: { treeId: treeId, id: id }
        };
    };
    /**
     * @param {?} treeId
     * @param {?} node
     * @return {?}
     */
    TreeActionsService.prototype.deleteNodeSuccess = /**
     * @param {?} treeId
     * @param {?} node
     * @return {?}
     */
    function (treeId, node) {
        return {
            type: TreeActionsService.TREE_DELETE_NODE_SUCCESS,
            payload: {
                treeId: treeId,
                node: node
            }
        };
    };
    /**
     * @param {?} treeId
     * @param {?} node
     * @return {?}
     */
    TreeActionsService.prototype.deleteNodeError = /**
     * @param {?} treeId
     * @param {?} node
     * @return {?}
     */
    function (treeId, node) {
        return {
            type: TreeActionsService.TREE_DELETE_NODE_ERROR,
            payload: {
                treeId: treeId,
                node: node
            }
        };
    };
    /**
     * @param {?} treeId
     * @param {?} parentId
     * @return {?}
     */
    TreeActionsService.prototype.insertNode = /**
     * @param {?} treeId
     * @param {?} parentId
     * @return {?}
     */
    function (treeId, parentId) {
        return {
            type: TreeActionsService.TREE_INSERT_NODE,
            payload: {
                treeId: treeId,
                id: parentId
            }
        };
    };
    /**
     * @param {?} treeId
     * @param {?} id
     * @return {?}
     */
    TreeActionsService.prototype.loadTree = /**
     * @param {?} treeId
     * @param {?} id
     * @return {?}
     */
    function (treeId, id) {
        return {
            type: TreeActionsService.TREE_LOAD,
            payload: {
                treeId: treeId,
                id: id
            }
        };
    };
    /**
     * @param {?} treeId
     * @param {?} id
     * @param {?} nodes
     * @return {?}
     */
    TreeActionsService.prototype.loadTreeSuccess = /**
     * @param {?} treeId
     * @param {?} id
     * @param {?} nodes
     * @return {?}
     */
    function (treeId, id, nodes) {
        return {
            type: TreeActionsService.TREE_LOAD_SUCCESS,
            payload: {
                treeId: treeId,
                id: id,
                nodes: nodes
            }
        };
    };
    /**
     * @param {?} treeId
     * @param {?} id
     * @return {?}
     */
    TreeActionsService.prototype.loadTreeError = /**
     * @param {?} treeId
     * @param {?} id
     * @return {?}
     */
    function (treeId, id) {
        return {
            type: TreeActionsService.TREE_LOAD_ERROR,
            payload: {
                treeId: treeId,
                id: id
            }
        };
    };
    /**
     * @param {?} treeId
     * @return {?}
     */
    TreeActionsService.prototype.markAsFullyLoaded = /**
     * @param {?} treeId
     * @return {?}
     */
    function (treeId) {
        return {
            type: TreeActionsService.TREE_MARK_AS_FULLY_LOADED,
            payload: { treeId: treeId }
        };
    };
    /**
     * @param {?} type
     * @param {?} treeId
     * @param {?} source
     * @param {?} target
     * @return {?}
     */
    TreeActionsService.prototype.moveNode = /**
     * @param {?} type
     * @param {?} treeId
     * @param {?} source
     * @param {?} target
     * @return {?}
     */
    function (type, treeId, source, target) {
        return {
            type: TreeActionsService.TREE_MOVE_NODE,
            payload: {
                sourceOfDroppedData: type,
                treeId: treeId,
                oldNode: source,
                node: target
            }
        };
    };
    /**
     * @param {?} treeId
     * @param {?} source
     * @param {?} target
     * @return {?}
     */
    TreeActionsService.prototype.moveNodeSuccess = /**
     * @param {?} treeId
     * @param {?} source
     * @param {?} target
     * @return {?}
     */
    function (treeId, source, target) {
        return {
            type: TreeActionsService.TREE_MOVE_NODE_SUCCESS,
            payload: {
                treeId: treeId,
                source: source,
                target: target
            }
        };
    };
    /**
     * @param {?} treeId
     * @param {?} source
     * @param {?} target
     * @return {?}
     */
    TreeActionsService.prototype.moveNodeError = /**
     * @param {?} treeId
     * @param {?} source
     * @param {?} target
     * @return {?}
     */
    function (treeId, source, target) {
        return {
            type: TreeActionsService.TREE_MOVE_NODE_ERROR,
            payload: {
                treeId: treeId,
                source: source,
                target: target
            }
        };
    };
    /**
     * @param {?} treeId
     * @param {?} nodes
     * @return {?}
     */
    TreeActionsService.prototype.setAllNodes = /**
     * @param {?} treeId
     * @param {?} nodes
     * @return {?}
     */
    function (treeId, nodes) {
        return {
            type: TreeActionsService.TREE_SET_ALL_NODES,
            payload: {
                treeId: treeId,
                nodes: nodes
            }
        };
    };
    /**
     * @param {?} treeId
     * @param {?} configuration
     * @return {?}
     */
    TreeActionsService.prototype.setConfiguration = /**
     * @param {?} treeId
     * @param {?} configuration
     * @return {?}
     */
    function (treeId, configuration) {
        return {
            type: TreeActionsService.TREE_SET_CONFIGURATION,
            payload: { treeId: treeId, configuration: configuration }
        };
    };
    /**
     * @param {?} treeId
     * @param {?} ids
     * @return {?}
     */
    TreeActionsService.prototype.loadPath = /**
     * @param {?} treeId
     * @param {?} ids
     * @return {?}
     */
    function (treeId, ids) {
        return {
            type: TreeActionsService.TREE_LOAD_PATH,
            payload: { treeId: treeId, ids: ids }
        };
    };
    /**
     * @param {?} treeId
     * @param {?} node
     * @return {?}
     */
    TreeActionsService.prototype.selectNode = /**
     * @param {?} treeId
     * @param {?} node
     * @return {?}
     */
    function (treeId, node) {
        return {
            type: TreeActionsService.TREE_SELECT_NODE,
            payload: { node: node, treeId: treeId }
        };
    };
    TreeActionsService.TREE_SAVE_NODE = 'TREE_SAVE_NODE';
    TreeActionsService.TREE_SAVE_NODE_SUCCESS = 'TREE_SAVE_NODE_SUCCESS';
    TreeActionsService.TREE_SAVE_NODE_ERROR = 'TREE_SAVE_NODE_ERROR';
    TreeActionsService.TREE_DELETE_NODE = 'TREE_DELETE_NODE';
    TreeActionsService.TREE_DELETE_NODE_SUCCESS = 'TREE_DELETE_NODE_SUCCESS';
    TreeActionsService.TREE_DELETE_NODE_ERROR = 'TREE_DELETE_NODE_ERROR';
    TreeActionsService.TREE_EDIT_NODE_START = 'TREE_EDIT_NODE_START';
    TreeActionsService.TREE_COLLAPSE_NODE = 'TREE_COLLAPSE_NODE';
    TreeActionsService.TREE_EXPAND_NODE = 'TREE_EXPAND_NODE';
    TreeActionsService.TREE_INSERT_NODE = 'TREE_INSERT_NODE';
    TreeActionsService.TREE_LOAD = 'TREE_LOAD';
    TreeActionsService.TREE_LOAD_PATH = 'TREE_LOAD_PATH';
    TreeActionsService.TREE_LOAD_SUCCESS = 'TREE_LOAD_SUCCESS';
    TreeActionsService.TREE_LOAD_ERROR = 'TREE_LOAD_ERROR';
    TreeActionsService.TREE_MARK_AS_FULLY_LOADED = 'TREE_MARK_AS_FULLY_LOADED';
    TreeActionsService.TREE_MOVE_NODE = 'TREE_MOVE_NODE';
    TreeActionsService.TREE_MOVE_NODE_SUCCESS = 'TREE_MOVE_NODE_SUCCESS';
    TreeActionsService.TREE_MOVE_NODE_ERROR = 'TREE_MOVE_NODE_ERROR';
    TreeActionsService.TREE_REGISTER = 'TREE_REGISTER';
    TreeActionsService.TREE_SELECT_NODE = 'TREE_SELECT_NODE';
    TreeActionsService.TREE_SET_ALL_NODES = 'TREE_SET_ALL_NODES';
    TreeActionsService.TREE_SET_CONFIGURATION = 'TREE_SET_CONFIGURATION';
    TreeActionsService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    TreeActionsService.ctorParameters = function () { return []; };
    return TreeActionsService;
}());

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var /** @type {?} */ NEW_NODE_ID = 'ri-new-node-id';
var /** @type {?} */ emptyTreeData = {
    nodes: {
        entities: {},
        selected: null,
        rootNodes: []
    },
    configuration: {
        isFullyLoaded: false
    }
};
/**
 * @param {?} state
 * @param {?=} treeId
 * @return {?}
 */
function copyState(state$$1, treeId) {
    if (treeId === void 0) { treeId = null; }
    var /** @type {?} */ newState = __assign({}, state$$1);
    // todo: find better way to clone object
    if (treeId) {
        newState[treeId] = {
            nodes: {
                entities: __assign({}, state$$1[treeId].nodes.entities),
                selected: state$$1[treeId].nodes.selected,
                rootNodes: state$$1[treeId].nodes.rootNodes.slice()
            },
            configuration: __assign({}, state$$1[treeId].configuration)
        };
    }
    return newState;
}
/**
 * @param {?} state
 * @param {?} action
 * @return {?}
 */
function removeNode(state$$1, action) {
    var /** @type {?} */ newState = copyState(state$$1, action.payload.treeId);
    var /** @type {?} */ treeId = action.payload.treeId;
    var /** @type {?} */ treeState = newState[treeId];
    var /** @type {?} */ node = action.payload.node;
    var /** @type {?} */ parentId = node.parentId;
    delete treeState.nodes.entities[node.id];
    if (parentId) {
        var /** @type {?} */ parent_1 = __assign({}, treeState.nodes.entities[parentId]);
        parent_1.children = parent_1.children.filter(function (id) { return id !== node.id; });
        treeState.nodes.entities[parentId] = parent_1;
    }
    else {
        treeState.nodes.rootNodes = treeState.nodes.rootNodes.filter(function (id) { return id !== node.id; });
    }
    return newState;
}
/**
 * @param {?} state
 * @param {?} action
 * @return {?}
 */
function loadNodes(state$$1, action) {
    var /** @type {?} */ newState = copyState(state$$1, action.payload.treeId);
    var /** @type {?} */ parent = null;
    var /** @type {?} */ treeId = action.payload.treeId;
    var /** @type {?} */ parentId = action.payload.id;
    if (parentId) {
        parent = newState[treeId].nodes.entities[parentId];
        parent.children = [];
    }
    else {
        newState[treeId].nodes.entities = {};
    }
    action.payload.nodes.forEach(function (nodeData) {
        nodeData.treeId = treeId;
        if (parent) {
            parent.children.push(nodeData.id);
            nodeData.parents = parent.parents.concat([parent.id]);
        }
        else {
            nodeData.parents = [];
        }
        newState[treeId].nodes.entities[nodeData.id] = nodeData;
        if (!parentId) {
            newState[treeId].nodes.rootNodes.push(nodeData.id);
        }
    });
    return newState;
}
/**
 * @param {?} state
 * @param {?} action
 * @return {?}
 */
function expandNode(state$$1, action) {
    var /** @type {?} */ treeId = action.payload.treeId;
    var /** @type {?} */ newState = copyState(state$$1, treeId);
    var /** @type {?} */ nodeId = action.payload.id;
    newState[treeId].nodes.entities[nodeId] = Object.assign({}, newState[treeId].nodes.entities[nodeId], { isExpanded: true });
    return newState;
}
/**
 * @param {?} state
 * @param {?} action
 * @return {?}
 */
function collapseNode(state$$1, action) {
    var /** @type {?} */ treeId = action.payload.treeId;
    var /** @type {?} */ newState = copyState(state$$1, treeId);
    var /** @type {?} */ nodeId = action.payload.id;
    newState[treeId].nodes.entities[nodeId] = __assign({}, newState[treeId].nodes.entities[nodeId], { isExpanded: false });
    return newState;
}
/**
 * @param {?} state
 * @param {?} action
 * @return {?}
 */
function insertNode(state$$1, action) {
    var /** @type {?} */ treeId = action.payload.treeId;
    var /** @type {?} */ newState = copyState(state$$1, treeId);
    var /** @type {?} */ parentId = action.payload.id;
    var /** @type {?} */ newNode = {
        id: NEW_NODE_ID,
        treeId: treeId,
        name: 'New data',
        parentId: parentId,
        children: [],
        parents: [],
        isExpanded: false
    };
    newState[treeId].nodes.entities[NEW_NODE_ID] = newNode;
    if (!parentId) {
        newState[treeId].nodes.rootNodes = newState[treeId].nodes.rootNodes.concat([NEW_NODE_ID]);
    }
    return newState;
}
/**
 * @param {?} state
 * @param {?} action
 * @return {?}
 */
function saveNode(state$$1, action) {
    var /** @type {?} */ newState = copyState(state$$1, action.payload.treeId);
    var /** @type {?} */ old = action.payload.oldNode;
    var /** @type {?} */ newNode = action.payload.node;
    var /** @type {?} */ treeId = action.payload.treeId;
    var /** @type {?} */ treeState = newState[treeId].nodes.entities;
    if (treeState[NEW_NODE_ID]) {
        delete treeState[NEW_NODE_ID];
    }
    else {
        delete treeState[old.id];
    }
    var /** @type {?} */ nodeId = newNode.id;
    treeState[nodeId] = newNode;
    var /** @type {?} */ parentId = newNode.parentId;
    var /** @type {?} */ parent = treeState[parentId] || null;
    if (parentId) {
        if (parent) {
            if (!parent.children) {
                parent.children = [];
            }
            parent.children.push(nodeId);
            newNode.parents = parent.parents.concat([parent.id]);
        }
    }
    else if (old.id === NEW_NODE_ID) {
        newState[treeId].nodes.rootNodes = newState[treeId].nodes.rootNodes.filter(function (id) { return id !== NEW_NODE_ID; });
        newState[treeId].nodes.rootNodes.push(nodeId);
    }
    return newState;
}
/**
 * @param {?} state
 * @param {?} action
 * @return {?}
 */
function moveNode(state$$1, action) {
    var /** @type {?} */ newState = copyState(state$$1, action.payload.treeId);
    var /** @type {?} */ oldNode = action.payload.source;
    var /** @type {?} */ newNode = action.payload.target;
    var /** @type {?} */ treeId = action.payload.treeId;
    var /** @type {?} */ treeData = newState[treeId];
    var /** @type {?} */ treeState = newState[treeId].nodes.entities;
    // remove info about removed child
    if (oldNode.parentId) {
        treeState[oldNode.parentId].children = treeState[oldNode.parentId].children.filter(function (id) { return id !== oldNode.id; });
    }
    else {
        treeData.nodes.rootNodes = treeData.nodes.rootNodes.filter(function (id) { return id !== oldNode.id; });
    }
    // add info about moved node
    if (newNode.parentId) {
        var /** @type {?} */ newParent = treeState[newNode.parentId];
        if (newParent.children) {
            newParent.children.push(newNode.id);
        }
        newNode.parents = newParent.parents.concat([newParent.id]);
    }
    else {
        treeData.nodes.rootNodes.push(newNode.id);
        newNode.parents = [];
    }
    // replace node data
    treeState[newNode.id] = __assign({}, newNode);
    return newState;
}
/**
 * @param {?} state
 * @param {?} action
 * @return {?}
 */
function registerTree(state$$1, action) {
    var /** @type {?} */ newState = copyState(state$$1);
    newState[action.payload.treeId] = {
        nodes: {
            entities: __assign({}, emptyTreeData.nodes.entities),
            selected: emptyTreeData.nodes.selected,
            rootNodes: emptyTreeData.nodes.rootNodes.slice()
        },
        configuration: __assign({}, emptyTreeData.configuration)
    };
    return newState;
}
/**
 * @param {?} state
 * @param {?} action
 * @return {?}
 */
function setAllNodes(state$$1, action) {
    var /** @type {?} */ newState = copyState(state$$1, action.payload.treeId);
    var /** @type {?} */ treeId = action.payload.treeId;
    var /** @type {?} */ nodes = action.payload.nodes;
    var /** @type {?} */ newNodes = {};
    var /** @type {?} */ ids = nodes.map(function (nodeData) { return nodeData.id; });
    nodes.forEach(function (nodeData) {
        nodeData.treeId = treeId;
        newNodes[nodeData.id] = nodeData;
        if (nodeData.parentId === null) {
            newState[treeId].nodes.rootNodes.push(nodeData.id);
        }
    });
    newState[treeId].nodes.rootNodes.forEach(function (id) { return updateParents(newNodes, id); });
    newState[treeId].nodes.entities = newNodes;
    return newState;
}
/**
 * @param {?} nodes
 * @param {?} nodeId
 * @param {?=} parents
 * @return {?}
 */
function updateParents(nodes, nodeId, parents) {
    if (parents === void 0) { parents = []; }
    var /** @type {?} */ node = nodes[nodeId];
    if (node) {
        node.parents = parents.slice();
        if (node.children.length > 0) {
            var /** @type {?} */ newParents_1 = parents.concat([node.id]);
            node.children.forEach(function (childId) { return updateParents(nodes, childId, newParents_1); });
        }
    }
}
/**
 * @param {?} state
 * @param {?} action
 * @return {?}
 */
function markTreeAsFullyLoaded(state$$1, action) {
    var /** @type {?} */ treeId = action.payload.treeId;
    var /** @type {?} */ newState = copyState(state$$1, treeId);
    newState[treeId].configuration = __assign({}, newState[treeId].configuration, { isFullyLoaded: true });
    return newState;
}
/**
 * @param {?} state
 * @param {?} action
 * @return {?}
 */
function setConfiguration(state$$1, action) {
    var /** @type {?} */ treeId = action.payload.treeId;
    var /** @type {?} */ newState = copyState(state$$1, treeId);
    newState[treeId].configuration = __assign({}, newState[treeId].configuration, action.payload.configuration);
    return newState;
}
/**
 * @param {?} state
 * @param {?} action
 * @return {?}
 */
function selectNode(state$$1, action) {
    var /** @type {?} */ treeId = action.payload.treeId;
    var /** @type {?} */ node = action.payload.node;
    var /** @type {?} */ newState = copyState(state$$1, treeId);
    newState[treeId].nodes.selected = node ? node.id : null;
    return newState;
}
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function treeReducer(state$$1, action) {
    if (state$$1 === void 0) { state$$1 = {}; }
    switch (action.type) {
        case TreeActionsService.TREE_REGISTER:
            return registerTree(state$$1, action);
        case TreeActionsService.TREE_SAVE_NODE_SUCCESS:
            return saveNode(state$$1, action);
        case TreeActionsService.TREE_DELETE_NODE_SUCCESS:
            return removeNode(state$$1, action);
        case TreeActionsService.TREE_INSERT_NODE:
            return insertNode(state$$1, action);
        case TreeActionsService.TREE_LOAD_SUCCESS:
            return loadNodes(state$$1, action);
        case TreeActionsService.TREE_MOVE_NODE_SUCCESS:
            return moveNode(state$$1, action);
        case TreeActionsService.TREE_SET_ALL_NODES:
            return setAllNodes(state$$1, action);
        case TreeActionsService.TREE_MARK_AS_FULLY_LOADED:
            return markTreeAsFullyLoaded(state$$1, action);
        case TreeActionsService.TREE_SET_CONFIGURATION:
            return setConfiguration(state$$1, /** @type {?} */ (action));
        case TreeActionsService.TREE_EXPAND_NODE:
            return expandNode(state$$1, action);
        case TreeActionsService.TREE_COLLAPSE_NODE:
            return collapseNode(state$$1, action);
        case TreeActionsService.TREE_SELECT_NODE:
            return selectNode(state$$1, action);
        case TreeActionsService.TREE_DELETE_NODE:
        case TreeActionsService.TREE_EDIT_NODE_START:
        case TreeActionsService.TREE_LOAD:
        case TreeActionsService.TREE_MOVE_NODE:
        case TreeActionsService.TREE_SAVE_NODE:
            return state$$1;
        default:
            return state$$1;
    }
}
var /** @type {?} */ treeStateSelector = createFeatureSelector('trees');
/**
 * @param {?} treeId
 * @return {?}
 */
function treeSelector(treeId) {
    return createSelector(treeStateSelector, function (state$$1) { return state$$1[treeId] || null; });
}
/**
 * @param {?} treeId
 * @return {?}
 */
function treeConfigurationSelector(treeId) {
    return createSelector(treeStateSelector, function (state$$1) { return state$$1[treeId].configuration || null; });
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ isEqual = _isEqual;
var TreeModel = /** @class */ (function () {
    function TreeModel(treeActionDispatcher, treeData$, configuration, _fullyLoaded) {
        if (_fullyLoaded === void 0) { _fullyLoaded = false; }
        var _this = this;
        this.treeActionDispatcher = treeActionDispatcher;
        this.treeData$ = treeData$;
        this.configuration = configuration;
        this._fullyLoaded = _fullyLoaded;
        this.nodes$ = this.treeData$
            .pipe(distinctUntilChanged(function (prev, next) {
            return isEqual(prev.nodes.entities, next.nodes.entities);
        }), map(function (treeData) { return treeData.nodes.entities; }));
        this.rootNodes$ = this.treeData$
            .pipe(map(function (treeData) { return treeData.nodes.rootNodes.map(function (id) { return treeData.nodes.entities[id]; }).sort(_this.sortNodes); }), distinctUntilChanged());
        this.currentSelectedNode$ = this.treeData$
            .pipe(map(function (treeData) {
            var /** @type {?} */ nodesData = treeData.nodes;
            var /** @type {?} */ selectedId = nodesData.selected;
            return selectedId ? nodesData.entities[selectedId] : null;
        }));
        this.initConfiguration();
    }
    Object.defineProperty(TreeModel.prototype, "treeId", {
        get: /**
         * @return {?}
         */
        function () {
            return this.configuration.treeId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeModel.prototype, "isFullyLoaded", {
        get: /**
         * @return {?}
         */
        function () {
            return this._fullyLoaded;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TreeModel.prototype.getParentsList = /**
     * @return {?}
     */
    function () {
        return Observable.combineLatest(this.currentSelectedNode$, this.nodes$)
            .pipe(map(function (_a) {
            var currentNode = _a[0], nodes = _a[1];
            if (!Boolean(currentNode)) {
                return [];
            }
            var /** @type {?} */ parents = currentNode.parents.map(function (id) { return nodes[id]; });
            parents.push(currentNode);
            return parents;
        }));
    };
    /**
     * @param {?} nodeId
     * @return {?}
     */
    TreeModel.prototype.getChildren = /**
     * @param {?} nodeId
     * @return {?}
     */
    function (nodeId) {
        var _this = this;
        return this.nodes$
            .pipe(map(function (state$$1) { return _this.getNodesByParentId(state$$1, nodeId); }), map(function (nodes) {
            return nodes.slice().sort(_this.sortNodes);
        }));
    };
    /**
     * @param {?} path
     * @return {?}
     */
    TreeModel.prototype.initPath = /**
     * @param {?} path
     * @return {?}
     */
    function (path) {
        this.treeActionDispatcher.loadPath(this.configuration.treeId, path);
    };
    /**
     * @return {?}
     */
    TreeModel.prototype.initConfiguration = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ defaultConfiguration = {
            disableMoveNodes: false,
            dragZone: null,
            dropZone: null,
            treeId: 'tree',
            showAddButton: true,
            isAnimation: false,
        };
        for (var /** @type {?} */ key in defaultConfiguration) {
            if (this.configuration[key] === undefined) {
                this.configuration[key] = defaultConfiguration[key];
            }
        }
    };
    /**
     * @param {?} state
     * @param {?} id
     * @return {?}
     */
    TreeModel.prototype.getNodesByParentId = /**
     * @param {?} state
     * @param {?} id
     * @return {?}
     */
    function (state$$1, id) {
        return Object.keys(state$$1)
            .filter(function (key) { return state$$1[key].parentId === id; })
            .map(function (key) { return state$$1[key]; });
    };
    /**
     * @param {?} first
     * @param {?} second
     * @return {?}
     */
    TreeModel.prototype.sortNodes = /**
     * @param {?} first
     * @param {?} second
     * @return {?}
     */
    function (first, second) {
        if (second.id === NEW_NODE_ID) {
            return -1;
        }
        return first.name > second.name ? 1 : -1;
    };
    return TreeModel;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TreeActionsDispatcherService = /** @class */ (function () {
    function TreeActionsDispatcherService(actions, store) {
        this.actions = actions;
        this.store = store;
    }
    /**
     * @param {?} treeId
     * @param {?} id
     * @return {?}
     */
    TreeActionsDispatcherService.prototype.collapseNode = /**
     * @param {?} treeId
     * @param {?} id
     * @return {?}
     */
    function (treeId, id) {
        this.store.dispatch(this.actions.collapseNode(treeId, id));
    };
    /**
     * @param {?} treeId
     * @param {?} node
     * @return {?}
     */
    TreeActionsDispatcherService.prototype.deleteNode = /**
     * @param {?} treeId
     * @param {?} node
     * @return {?}
     */
    function (treeId, node) {
        this.store.dispatch(this.actions.deleteNode(treeId, node));
    };
    /**
     * @param {?} node
     * @return {?}
     */
    TreeActionsDispatcherService.prototype.editNodeStart = /**
     * @param {?} node
     * @return {?}
     */
    function (node) {
        this.store.dispatch(this.actions.editNodeStart(node));
    };
    /**
     * @param {?} treeId
     * @param {?} id
     * @return {?}
     */
    TreeActionsDispatcherService.prototype.expandNode = /**
     * @param {?} treeId
     * @param {?} id
     * @return {?}
     */
    function (treeId, id) {
        this.store.dispatch(this.actions.expandNode(treeId, id));
    };
    /**
     * @param {?} treeId
     * @param {?} ids
     * @return {?}
     */
    TreeActionsDispatcherService.prototype.loadPath = /**
     * @param {?} treeId
     * @param {?} ids
     * @return {?}
     */
    function (treeId, ids) {
        this.store.dispatch(this.actions.loadPath(treeId, ids));
    };
    /**
     * @param {?} treeId
     * @param {?} id
     * @return {?}
     */
    TreeActionsDispatcherService.prototype.loadTree = /**
     * @param {?} treeId
     * @param {?} id
     * @return {?}
     */
    function (treeId, id) {
        this.store.dispatch(this.actions.loadTree(treeId, id));
    };
    /**
     * @param {?} treeId
     * @return {?}
     */
    TreeActionsDispatcherService.prototype.markAsFullyLoaded = /**
     * @param {?} treeId
     * @return {?}
     */
    function (treeId) {
        this.store.dispatch(this.actions.markAsFullyLoaded(treeId));
    };
    /**
     * @param {?} treeId
     * @param {?=} silent
     * @param {?=} nodes
     * @return {?}
     */
    TreeActionsDispatcherService.prototype.registerTree = /**
     * @param {?} treeId
     * @param {?=} silent
     * @param {?=} nodes
     * @return {?}
     */
    function (treeId, silent, nodes) {
        if (silent === void 0) { silent = false; }
        this.store.dispatch(this.actions.registerTree(treeId, silent, nodes));
    };
    /**
     * @param {?} treeId
     * @param {?} node
     * @return {?}
     */
    TreeActionsDispatcherService.prototype.saveNode = /**
     * @param {?} treeId
     * @param {?} node
     * @return {?}
     */
    function (treeId, node) {
        this.store.dispatch(this.actions.saveNode(treeId, node));
    };
    /**
     * @param {?} treeId
     * @param {?} configuration
     * @return {?}
     */
    TreeActionsDispatcherService.prototype.setConfiguration = /**
     * @param {?} treeId
     * @param {?} configuration
     * @return {?}
     */
    function (treeId, configuration) {
        this.store.dispatch(this.actions.setConfiguration(treeId, configuration));
    };
    /**
     * @param {?} treeId
     * @param {?} node
     * @return {?}
     */
    TreeActionsDispatcherService.prototype.selectNode = /**
     * @param {?} treeId
     * @param {?} node
     * @return {?}
     */
    function (treeId, node) {
        this.store.dispatch(this.actions.selectNode(treeId, node));
    };
    TreeActionsDispatcherService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    TreeActionsDispatcherService.ctorParameters = function () { return [
        { type: TreeActionsService, },
        { type: Store, },
    ]; };
    return TreeActionsDispatcherService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @return {?}
 */
function expand() {
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
var ItemComponent = /** @class */ (function () {
    function ItemComponent(treeActionsDispatcherService, contextMenuService, actions$) {
        this.treeActionsDispatcherService = treeActionsDispatcherService;
        this.contextMenuService = contextMenuService;
        this.actions$ = actions$;
        /**
         * Form field to change data name
         */
        this.nameField = new FormControl();
        this.isEditMode = false;
        this.isSelected = false;
        this.isExpanded = false;
        this.animationState = null;
        this.children$ = Observable.empty();
        this.isStartSave = false;
        this.subscription = new Subscription();
    }
    Object.defineProperty(ItemComponent.prototype, "node", {
        get: /**
         * @return {?}
         */
        function () {
            return this._node;
        },
        set: /**
         * Node instance
         * @param {?} node
         * @return {?}
         */
        function (node) {
            this._node = node;
            this.initEditModeIfNeeded(node);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} values
     * @return {?}
     */
    ItemComponent.prototype.ngOnChanges = /**
     * @param {?} values
     * @return {?}
     */
    function (values) {
        // if node is added to the tree then some part of nodes is moving down
        // and the new one is inserted, then all sub nodes should be rewritten
        var /** @type {?} */ node = values.node;
        if (node && !node.firstChange && node.previousValue.id !== node.currentValue.id) {
            this.children$ = this.treeModel.getChildren(this.node.id);
            if (this.node.isExpanded) {
                this.markNodeAsExpanded();
            }
            else {
                this.markNodeAsCollapsed();
            }
        }
    };
    /**
     * @return {?}
     */
    ItemComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.subscription.unsubscribe();
    };
    /**
     * @return {?}
     */
    ItemComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.markNodeAsCollapsed();
        this.children$ = this.treeModel.getChildren(this.node.id);
        if (this.node.isExpanded) {
            this.markNodeAsExpanded();
        }
        this.subscription.add(this.treeModel.currentSelectedNode$
            .pipe(map(function (node) { return node ? node.id : null; }), distinctUntilChanged())
            .subscribe(function (id) { return _this.isSelected = id === _this.node.id; }));
        this.subscription.add(this.getSubscriptionToExpandNode());
        this.subscription.add(this.getSubscriptionToCollapseNode());
        this.subscription.add(this.actions$
            .ofType(TreeActionsService.TREE_EDIT_NODE_START)
            .pipe(filter(function (action) { return action.payload.node === _this.node; }))
            .subscribe(function (action) {
            _this.nameField.setValue(_this.node.name);
            _this.isEditMode = true;
            _this.setFocus();
        }));
    };
    /**
     * Collapse node
     * @return {?}
     */
    ItemComponent.prototype.collapse = /**
     * Collapse node
     * @return {?}
     */
    function () {
        this.treeActionsDispatcherService.collapseNode(this.treeModel.treeId, this.node.id);
    };
    /**
     * Expand node
     * @return {?}
     */
    ItemComponent.prototype.expand = /**
     * Expand node
     * @return {?}
     */
    function () {
        this.treeActionsDispatcherService.expandNode(this.treeModel.treeId, this.node.id);
        if (!this.treeModel.isFullyLoaded) {
            this.treeActionsDispatcherService.loadTree(this.treeModel.treeId, this.node.id);
        }
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    ItemComponent.prototype.onAnimationDone = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        if ($event.toState === 'inactive') {
            this.isExpanded = false;
        }
    };
    /**
     * @return {?}
     */
    ItemComponent.prototype.onBlur = /**
     * @return {?}
     */
    function () {
        if (this.isStartSave) {
            this.isStartSave = false;
        }
        else {
            this.undoChanges();
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ItemComponent.prototype.onChange = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.stopPropagation();
        if (event.keyCode === 27) {
            this.undoChanges();
        }
        else if (event.keyCode === 13) {
            this.isStartSave = true;
            var /** @type {?} */ node = {
                id: this.node.id,
                treeId: this.node.treeId,
                name: this.nameField.value,
                parentId: this.node.parentId,
                children: this.node.children,
                parents: this.node.parents,
                isExpanded: false
            };
            this.treeActionsDispatcherService.saveNode(this.treeModel.treeId, node);
            this.isEditMode = false;
        }
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    ItemComponent.prototype.onContextMenu = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        if (!this.treeModel.configuration.disableContextMenu) {
            this.contextMenuService.show.next({
                contextMenu: this.contextMenu,
                event: $event,
                item: this.node
            });
        }
        $event.preventDefault();
        $event.stopPropagation();
    };
    /**
     * @return {?}
     */
    ItemComponent.prototype.onSelect = /**
     * @return {?}
     */
    function () {
        if (this.isSelected) {
            this.treeActionsDispatcherService.selectNode(this.treeModel.treeId, null);
        }
        else {
            this.treeActionsDispatcherService.selectNode(this.treeModel.treeId, this.node);
        }
    };
    /**
     * @return {?}
     */
    ItemComponent.prototype.isNewNode = /**
     * @return {?}
     */
    function () {
        return this.node.id === NEW_NODE_ID;
    };
    /**
     * @return {?}
     */
    ItemComponent.prototype.setFocus = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout(function () { return _this.input.nativeElement.focus(); }, 0);
    };
    /**
     * @return {?}
     */
    ItemComponent.prototype.undoChanges = /**
     * @return {?}
     */
    function () {
        this.isEditMode = false;
        if (this.isNewNode()) {
            this.treeActionsDispatcherService.deleteNode(this.treeModel.treeId, this.node);
        }
    };
    /**
     * @return {?}
     */
    ItemComponent.prototype.markNodeAsExpanded = /**
     * @return {?}
     */
    function () {
        if (this.treeModel.configuration.isAnimation) {
            this.animationState = 'active';
        }
        this.isExpanded = true;
    };
    /**
     * @return {?}
     */
    ItemComponent.prototype.markNodeAsCollapsed = /**
     * @return {?}
     */
    function () {
        if (this.treeModel.configuration.isAnimation) {
            this.animationState = 'inactive';
        }
        else {
            this.isExpanded = false;
        }
    };
    /**
     * @return {?}
     */
    ItemComponent.prototype.getSubscriptionToExpandNode = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.actions$
            .ofType(TreeActionsService.TREE_EXPAND_NODE)
            .pipe(filter(function (action) {
            return !_this.isExpanded
                && action.payload.treeId === _this.treeModel.treeId
                && _this.node.id === action.payload.id;
        }))
            .subscribe(function () {
            _this.markNodeAsExpanded();
            _this.isExpanded = true;
        });
    };
    /**
     * @return {?}
     */
    ItemComponent.prototype.getSubscriptionToCollapseNode = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.actions$
            .ofType(TreeActionsService.TREE_COLLAPSE_NODE)
            .pipe(filter(function (action) {
            return _this.isExpanded
                && action.payload.treeId === _this.treeModel.treeId
                && _this.node.id === action.payload.id;
        }))
            .subscribe(function () {
            _this.markNodeAsCollapsed();
        });
    };
    /**
     * @param {?} node
     * @return {?}
     */
    ItemComponent.prototype.initEditModeIfNeeded = /**
     * @param {?} node
     * @return {?}
     */
    function (node) {
        if (!node) {
            return;
        }
        this.isEditMode = node.id === NEW_NODE_ID;
        if (this.isEditMode) {
            this.nameField.setValue('');
            this.setFocus();
        }
    };
    ItemComponent.decorators = [
        { type: Component, args: [{
                    encapsulation: ViewEncapsulation.None,
                    selector: 'ri-tree-item',
                    template: "\n    <div class=\"tree-item\"\n         [ngClass]=\"{'tree-item-selected': isSelected}\"\n         (contextmenu)=\"onContextMenu($event)\"\n         riDroppable\n         riDraggable\n         [dragZone]=\"treeModel.configuration.dragZone\"\n         [dropConfig]=\"{dropAllowedCssClass: 'drop-allowed', dropZone: treeModel.configuration.dropZone}\"\n         [data]=\"node\"\n         id=\"node-{{node.id}}\"\n    >\n      <i *ngIf=\"!isExpanded\" (click)=\"expand()\" class=\"fa fa-caret-right pointer\"></i>\n      <i *ngIf=\"isExpanded\" (click)=\"collapse()\" class=\"fa fa-caret-down pointer\"></i>\n      <span *ngIf=\"!isEditMode\" class=\"tree-item-name\" (click)=\"onSelect()\">{{node.name}}</span>\n      <form name=\"form\">\n        <input #inputElement type=\"text\" class=\"form-control\" *ngIf=\"isEditMode\" [formControl]=\"nameField\"\n               name=\"name\" (keydown)=\"onChange($event)\" (blur)=\"onBlur()\"/>\n      </form>\n    </div>\n    <div class=\"tree\" [@isExpanded]=\"animationState\" (@isExpanded.done)=\"onAnimationDone($event)\">\n      <div *ngIf=\"isExpanded\">\n        <ri-tree-item *ngFor=\"let child of children$ | async\" [node]=\"child\" [treeModel]=\"treeModel\"\n                      [contextMenu]=\"contextMenu\"></ri-tree-item>\n      </div>\n    </div>\n  ",
                    styles: ["\n\n  "],
                    animations: [expand()]
                },] },
    ];
    /** @nocollapse */
    ItemComponent.ctorParameters = function () { return [
        { type: TreeActionsDispatcherService, },
        { type: ContextMenuService, },
        { type: Actions, },
    ]; };
    ItemComponent.propDecorators = {
        "input": [{ type: ViewChild, args: ['inputElement',] },],
        "node": [{ type: Input },],
        "treeModel": [{ type: Input },],
        "contextMenu": [{ type: Input },],
    };
    return ItemComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var DragAndDrop = /** @class */ (function () {
    function DragAndDrop() {
        this.dropStream$ = new Subject();
        this.dragStream$ = new BehaviorSubject(null);
        this.drop$ = new Observable();
        this.drop$ = this.dropStream$.withLatestFrom(this.dragStream$, function (dropNode, dragNode) {
            return { dragNode: dragNode, dropNode: dropNode, type: dragNode.type };
        });
    }
    /**
     * @param {?} dragElement
     * @return {?}
     */
    DragAndDrop.prototype.dragStart = /**
     * @param {?} dragElement
     * @return {?}
     */
    function (dragElement) {
        this.dragStream$.next(dragElement);
    };
    /**
     * @param {?} dropElement
     * @return {?}
     */
    DragAndDrop.prototype.dragEnd = /**
     * @param {?} dropElement
     * @return {?}
     */
    function (dropElement) {
        this.dropStream$.next(dropElement);
    };
    /**
     * @return {?}
     */
    DragAndDrop.prototype.getDragStream = /**
     * @return {?}
     */
    function () {
        return this.dragStream$;
    };
    /**
     * @return {?}
     */
    DragAndDrop.prototype.getLastDragElement = /**
     * @return {?}
     */
    function () {
        return this.dragStream$.getValue();
    };
    DragAndDrop.DROP_DATA_TYPE = 'TREE_NODE';
    DragAndDrop.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    DragAndDrop.ctorParameters = function () { return []; };
    return DragAndDrop;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TreeComponent = /** @class */ (function () {
    function TreeComponent(store, treeActions, dragAndDrop) {
        this.store = store;
        this.treeActions = treeActions;
        this.dragAndDrop = dragAndDrop;
        /**
         * List of default options for context menu
         */
        this.defaultOptions = [
            {
                name: 'onEdit',
                text: 'RI_TREE_LBL_EDIT_NODE',
                iconCls: 'fa fa-edit'
            },
            {
                name: 'onDelete',
                text: 'RI_TREE_LBL_REMOVE_NODE',
                iconCls: 'fa fa-trash'
            }
        ];
        /**
         * List of context menu items
         */
        this.menuList = [];
        this.subscription = new Subscription();
    }
    /**
     * @return {?}
     */
    TreeComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.registerMove();
        this.rootNodes$ = this.treeModel.rootNodes$;
        this.subscription.add(this.treeModel.currentSelectedNode$
            .subscribe(function (node) { return _this.currentSelectedNode = node; }));
    };
    /**
     * @param {?} data
     * @return {?}
     */
    TreeComponent.prototype.ngOnChanges = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        var _this = this;
        this.menuList = [];
        this.defaultOptions.forEach(function (item) { return _this.menuList.push(item); });
    };
    /**
     * @return {?}
     */
    TreeComponent.prototype.onAdd = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ parentId = this.currentSelectedNode ? this.currentSelectedNode.id : null;
        this.store.dispatch(this.treeActions.insertNode(this.treeModel.treeId, parentId));
    };
    /**
     * On select item from context menu
     *
     * @param {?} name - name of the event
     * @param {?} node - data item
     * @return {?}
     */
    TreeComponent.prototype.onContextMenuClick = /**
     * On select item from context menu
     *
     * @param {?} name - name of the event
     * @param {?} node - data item
     * @return {?}
     */
    function (name, node) {
        switch (name) {
            case 'onEdit':
                event.stopPropagation();
                this.store.dispatch(this.treeActions.editNodeStart(node));
                break;
            case 'onDelete':
                this.store.dispatch(this.treeActions.deleteNode(this.treeModel.treeId, node));
                break;
            default:
                console.warn('Unknown context menu action: ' + name);
        }
    };
    /**
     * Register data "move event"
     */
    /**
     * Register data "move event"
     * @return {?}
     */
    TreeComponent.prototype.registerMove = /**
     * Register data "move event"
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.treeModel.configuration.disableMoveNodes) {
            return;
        }
        this.dragAndDrop.drop$
            .pipe(filter(function (data) {
            if (data.type === DragAndDrop.DROP_DATA_TYPE) {
                if (data.dropNode) {
                    return data.dropNode.data.treeId === _this.treeModel.treeId;
                }
                else {
                    return data.dragNode.data.treeId === _this.treeModel.treeId;
                }
            }
            else {
                if (data.dropNode && data.dropNode.zones && data.dropNode.zones.indexOf(data.dragNode.zoneId) === -1) {
                    return false;
                }
                return true;
            }
        }))
            .subscribe(function (data) {
            var /** @type {?} */ dropNode = data.dropNode ? data.dropNode.data : null;
            _this.store.dispatch(_this.treeActions.moveNode(data.type, _this.treeModel.treeId, data.dragNode.data, dropNode));
        });
    };
    TreeComponent.decorators = [
        { type: Component, args: [{
                    encapsulation: ViewEncapsulation.None,
                    selector: 'ri-tree',
                    template: "\n    <div class=\"tree\">\n      <button *ngIf=\"treeModel.configuration.showAddButton\" class=\"btn btn-default add-node-button\" (click)=\"onAdd()\">\n        <i class=\"fa fa-plus\"></i> {{'RI_TREE_LBL_ADD_NODE' | translate}}\n      </button>\n      <!--@formatter:off-->\n      <div #customTemplate><ng-content></ng-content></div>\n      <!--@formatter:on-->\n      <div *ngIf=\"customTemplate.childNodes.length === 0\">\n        <ri-tree-item\n          class=\"root-node\"\n          *ngFor=\"let node of rootNodes$ | async\"\n          [node]=\"node\"\n          [treeModel]=\"treeModel\"\n          [contextMenu]=\"contextMenu\"></ri-tree-item>\n      </div>\n      <ri-dropzone [treeModel]=\"treeModel\"></ri-dropzone>\n      <context-menu id=\"context-menu-{{treeModel.treeId}}\" #contextMenu>\n        <ng-template *ngFor=\"let menuItem of menuList\" contextMenuItem let-item\n                     (execute)=\"onContextMenuClick(menuItem.name, $event.item)\">\n          <span class=\"{{menuItem.iconCls}}\" style=\"width: 20px; display: inline-block;\"></span>\n          {{menuItem.text | translate}}\n        </ng-template>\n      </context-menu>\n    </div>\n  ",
                    styles: ["\n    @iconWidth: 8px;\n    @colorHover: rgba(161, 197, 238, 0.2);\n    @colorSelected: #549dee;\n    @colorBorder: #4684ee;\n\n    .tree {\n      list-style-type: none;\n      margin: 0;\n      padding-left: 0;\n      position: relative;\n\n      .dropdown {\n        position: inherit;\n      }\n\n      .dropdown-menu {\n        position: absolute !important;\n      }\n\n      .pointer {\n        cursor: pointer;\n      }\n\n      .tree {\n        margin-left: 20px;\n      }\n\n      .tree-edit-btn, .tree-remove-btn {\n        display: none;\n      }\n\n      .tree-item {\n        padding: 2px 0;\n\n        &.drop-allowed {\n          .tree-item-name {\n            background-color: rgba(255, 0, 0, 0.3);\n          }\n        }\n\n        &.tree-item-selected {\n          > .tree-item-name {\n            padding: 0 1px;\n            border: 1px solid @colorBorder;\n            background-color: @colorSelected;\n          }\n        }\n\n        i {\n          width: @iconWidth !important;\n          text-align: center;\n        }\n\n        .no-children {\n          display: inline-block;\n          width: @iconWidth;\n        }\n\n        .tree-item-name {\n          display: inline-block;\n          line-height: 22px;\n          height: 22px;\n          padding: 0 2px;\n          cursor: pointer;\n\n          &:hover {\n            background-color: @colorHover;\n\n            .tree-edit-btn, .tree-remove-btn {\n              display: inline-block;\n            }\n          }\n        }\n\n        form {\n          display: inline-block;\n\n          input {\n            width: auto;\n          }\n        }\n      }\n    }\n  "]
                },] },
    ];
    /** @nocollapse */
    TreeComponent.ctorParameters = function () { return [
        { type: Store, },
        { type: TreeActionsService, },
        { type: DragAndDrop, },
    ]; };
    TreeComponent.propDecorators = {
        "treeModel": [{ type: Input },],
        "contextMenu": [{ type: ViewChild, args: ['contextMenu',] },],
    };
    return TreeComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var DraggableDirective = /** @class */ (function () {
    function DraggableDirective(el, renderer, dragAndDrop) {
        var _this = this;
        this.el = el;
        this.renderer = renderer;
        this.dragAndDrop = dragAndDrop;
        this.dragZone = null;
        this.sourceType = DragAndDrop.DROP_DATA_TYPE;
        this.dragEnabled = true;
        renderer.listen(el.nativeElement, 'dragstart', function ($event) {
            if (_this.dragEnabled) {
                _this.onDragStart($event);
            }
        });
        renderer.listen(el.nativeElement, 'dragend', function () {
            // on drag end we reset last drag element (this event is fired after drop)
            // on drag end we reset last drag element (this event is fired after drop)
            _this.dragAndDrop.dragStart(null);
        });
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    DraggableDirective.prototype.onDragStart = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.dragAndDrop.dragStart({ zoneId: this.dragZone, data: this.data, type: this.sourceType });
        $event.dataTransfer.effectAllowed = 'copy';
        $event.dataTransfer.dropEffect = 'copy';
    };
    /**
     * @return {?}
     */
    DraggableDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.el.nativeElement.draggable = this.dragEnabled;
        if (!this.data) {
            throw new Error('DraggableDirective needs data');
        }
    };
    DraggableDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[riDraggable]'
                },] },
    ];
    /** @nocollapse */
    DraggableDirective.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: Renderer, },
        { type: DragAndDrop, },
    ]; };
    DraggableDirective.propDecorators = {
        "data": [{ type: Input },],
        "dragZone": [{ type: Input },],
        "sourceType": [{ type: Input },],
    };
    return DraggableDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var DroppableDirective = /** @class */ (function () {
    function DroppableDirective(el, renderer, dragAndDrop) {
        var _this = this;
        this.el = el;
        this.renderer = renderer;
        this.dragAndDrop = dragAndDrop;
        this.dropConfig = {};
        this.isDropAllowed = function () {
            var /** @type {?} */ lastDragElement = this.dragAndDrop.getLastDragElement();
            var /** @type {?} */ source = lastDragElement.data;
            var /** @type {?} */ target = this.data;
            var /** @type {?} */ dropZone = this.dropConfig.dropZone;
            if (dropZone && dropZone.length > 0 && dropZone.indexOf(lastDragElement.zoneId) === -1) {
                return false;
            }
            // todo: check drag and drop zones
            return !(source === target || target.id === source.parentId || target.parents.indexOf(source.id) > -1);
        };
        renderer.listen(el.nativeElement, 'dragover', function ($event) {
            $event.preventDefault();
            var /** @type {?} */ dropAllowed = _this.isDropAllowed();
            _this.changeTargetCursor($event, dropAllowed);
            _this.toggleDropClass(dropAllowed);
        });
        renderer.listen(el.nativeElement, 'dragleave', function ($event) {
            $event.preventDefault();
            _this.toggleDropClass(false);
        });
        renderer.listen(el.nativeElement, 'drop', function () {
            _this.toggleDropClass(false);
            if (_this.isDropAllowed()) {
                _this.dragAndDrop.dragEnd({ zones: _this.dropConfig.dropZone, data: _this.data });
            }
        });
    }
    /**
     * @return {?}
     */
    DroppableDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.initConfig();
        if (!this.data) {
            throw new Error('DroppableDirective needs data');
        }
    };
    /**
     * Add or remove additional class when drop allowed
     * @param {?=} dropAllowed
     * @return {?}
     */
    DroppableDirective.prototype.toggleDropClass = /**
     * Add or remove additional class when drop allowed
     * @param {?=} dropAllowed
     * @return {?}
     */
    function (dropAllowed) {
        if (dropAllowed === void 0) { dropAllowed = false; }
        this.renderer.setElementClass(this.el.nativeElement, this.dropConfig.dropAllowedCssClass, dropAllowed);
    };
    /**
     * Change drag event cursor
     * @param {?} $event
     * @param {?=} add
     * @return {?}
     */
    DroppableDirective.prototype.changeTargetCursor = /**
     * Change drag event cursor
     * @param {?} $event
     * @param {?=} add
     * @return {?}
     */
    function ($event, add) {
        if (add === void 0) { add = false; }
        var /** @type {?} */ cursorType = add ? 'copy' : 'none';
        $event.dataTransfer.effectAllowed = cursorType;
        $event.dataTransfer.dropEffect = cursorType;
    };
    /**
     * initialize configuration options, use default or passed
     * @return {?}
     */
    DroppableDirective.prototype.initConfig = /**
     * initialize configuration options, use default or passed
     * @return {?}
     */
    function () {
        var /** @type {?} */ defaultConfig = {
            dropAllowedCssClass: 'drop-allowed'
        };
        for (var /** @type {?} */ key in defaultConfig) {
            if (defaultConfig.hasOwnProperty(key)) {
                this.dropConfig[key] = this.dropConfig[key] || defaultConfig[key];
            }
        }
    };
    DroppableDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[riDroppable]'
                },] },
    ];
    /** @nocollapse */
    DroppableDirective.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: Renderer, },
        { type: DragAndDrop, },
    ]; };
    DroppableDirective.propDecorators = {
        "data": [{ type: Input },],
        "dropConfig": [{ type: Input },],
    };
    return DroppableDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var DropzoneComponent = /** @class */ (function () {
    function DropzoneComponent(dragAndDrop) {
        var _this = this;
        this.dragAndDrop = dragAndDrop;
        this.dropZone = [];
        var /** @type {?} */ isDragStart$ = this.dragAndDrop.getDragStream()
            .pipe(map(function (dragElement) {
            var /** @type {?} */ isDragElement = !!dragElement && !!dragElement.data;
            if (isDragElement) {
                if (dragElement.type === DragAndDrop.DROP_DATA_TYPE) {
                    var /** @type {?} */ isNotRootElement = dragElement.data.parentId;
                    var /** @type {?} */ isFromCurrentTree = dragElement.data.treeId === _this.treeModel.treeId;
                    return (isNotRootElement && isFromCurrentTree) ? true : false;
                }
                else {
                    return true;
                }
            }
            return false;
        }));
        var /** @type {?} */ isDragEnd$ = this.dragAndDrop.drop$
            .pipe(map(function (data) {
            return false;
        }));
        this.isOpen$ = Observable.merge(isDragStart$, isDragEnd$);
    }
    /**
     * @return {?}
     */
    DropzoneComponent.prototype.onDrop = /**
     * @return {?}
     */
    function () {
        this.dragAndDrop.dragEnd(null);
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    DropzoneComponent.prototype.onDragOver = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        $event.preventDefault();
    };
    DropzoneComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ri-dropzone',
                    template: "\n    <div *ngIf=\"isOpen$ | async\" (drop)=\"onDrop()\" (dragover)=\"onDragOver($event)\" class=\"dropzone\">\n      {{'RI_TREE_LBL_DROP_ZONE' | translate}}\n    </div>\n  ",
                    styles: ["\n    .dropzone {\n      display: inline-block;\n      border: 1px dotted red;\n      padding: 10px;\n      background-color: rgba(255, 0, 0, 0.3);\n    }\n  "]
                },] },
    ];
    /** @nocollapse */
    DropzoneComponent.ctorParameters = function () { return [
        { type: DragAndDrop, },
    ]; };
    DropzoneComponent.propDecorators = {
        "treeModel": [{ type: Input },],
        "dropZone": [{ type: Input },],
    };
    return DropzoneComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ NODE_SERVICE = new InjectionToken('NODE_SERVICE');
var NodeService = /** @class */ (function () {
    function NodeService(http) {
        this.http = http;
        this.apiConfig = {
            addUrl: '/api/nodes',
            getUrl: '/api/nodes',
            moveUrl: '/api/nodes/move',
            updateUrl: '/api/nodes',
            removeUrl: '/api/nodes',
        };
    }
    Object.defineProperty(NodeService.prototype, "treeId", {
        get: /**
         * @return {?}
         */
        function () {
            return 'tree';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} nodes
     * @return {?}
     */
    NodeService.prototype.setAllNodes = /**
     * @param {?} nodes
     * @return {?}
     */
    function (nodes) {
    };
    /**
     * @param {?=} nodeId
     * @return {?}
     */
    NodeService.prototype.load = /**
     * @param {?=} nodeId
     * @return {?}
     */
    function (nodeId) {
        if (nodeId === void 0) { nodeId = ''; }
        var /** @type {?} */ params = new HttpParams().set('nodeId', nodeId);
        return this.http.get(this.getPath('GET', nodeId), { params: params });
    };
    /**
     * @param {?} node
     * @param {?=} parentNodeId
     * @return {?}
     */
    NodeService.prototype.add = /**
     * @param {?} node
     * @param {?=} parentNodeId
     * @return {?}
     */
    function (node, parentNodeId) {
        if (parentNodeId === void 0) { parentNodeId = null; }
        return this.http.post(this.getPath('CREATE', parentNodeId), {
            node: node,
            parentNodeId: parentNodeId
        });
    };
    /**
     * @param {?} srcNode
     * @param {?} targetNode
     * @return {?}
     */
    NodeService.prototype.move = /**
     * @param {?} srcNode
     * @param {?} targetNode
     * @return {?}
     */
    function (srcNode, targetNode) {
        var /** @type {?} */ srcId = srcNode.id;
        var /** @type {?} */ targetId = targetNode ? targetNode.id : null;
        return this.http.put(this.getPath('MOVE', srcId, targetId), { source: srcId, target: targetId });
    };
    /**
     * @param {?} node
     * @return {?}
     */
    NodeService.prototype.update = /**
     * @param {?} node
     * @return {?}
     */
    function (node) {
        return this.http.put(this.getPath('UPDATE', node.id), node);
    };
    /**
     * @param {?} nodeId
     * @return {?}
     */
    NodeService.prototype.remove = /**
     * @param {?} nodeId
     * @return {?}
     */
    function (nodeId) {
        var /** @type {?} */ params = new HttpParams().set('nodeId', nodeId);
        return this.http.delete(this.getPath('REMOVE', nodeId), { params: params });
    };
    /**
     * @param {?} type
     * @param {?} nodeId
     * @param {?=} destNodeId
     * @return {?}
     */
    NodeService.prototype.getPath = /**
     * @param {?} type
     * @param {?} nodeId
     * @param {?=} destNodeId
     * @return {?}
     */
    function (type, nodeId, destNodeId) {
        if (destNodeId === void 0) { destNodeId = null; }
        if (!this.apiConfig) {
            throw new Error('No API configuration for Tree');
        }
        var /** @type {?} */ urlMap = {
            'GET': this.apiConfig.getUrl,
            'CREATE': this.apiConfig.addUrl,
            'REMOVE': this.apiConfig.removeUrl,
            'UPDATE': this.apiConfig.updateUrl,
            'MOVE': this.apiConfig.moveUrl
        };
        var /** @type {?} */ path = this.replaceNodeId(urlMap[type], nodeId);
        if (destNodeId) {
            path = this.replaceDestNodeId(path, destNodeId);
        }
        return path;
    };
    /**
     * @param {?} url
     * @param {?} nodeId
     * @return {?}
     */
    NodeService.prototype.replaceNodeId = /**
     * @param {?} url
     * @param {?} nodeId
     * @return {?}
     */
    function (url, nodeId) {
        return url.replace('{nodeId}', nodeId);
    };
    /**
     * @param {?} url
     * @param {?} nodeId
     * @return {?}
     */
    NodeService.prototype.replaceDestNodeId = /**
     * @param {?} url
     * @param {?} nodeId
     * @return {?}
     */
    function (url, nodeId) {
        return url.replace('{destNodeId}', nodeId);
    };
    NodeService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    NodeService.ctorParameters = function () { return [
        { type: HttpClient, },
    ]; };
    return NodeService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var NodeDispatcherService = /** @class */ (function () {
    function NodeDispatcherService(nodeService) {
        this.nodeService = nodeService;
    }
    /**
     * @param {?} key
     * @return {?}
     */
    NodeDispatcherService.prototype.get = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        var /** @type {?} */ nodeService = this.nodeService.find(function (service) { return service.treeId === key; });
        if (Boolean(nodeService)) {
            return nodeService;
        }
        else {
            // default node service provider
            return this.nodeService[0];
        }
    };
    NodeDispatcherService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    NodeDispatcherService.ctorParameters = function () { return [
        { type: Array, decorators: [{ type: Inject, args: [NODE_SERVICE,] },] },
    ]; };
    return NodeDispatcherService;
}());

var __assign$1 = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var TreeEffectsService = /** @class */ (function () {
    function TreeEffectsService(actions$, treeActions, nodeDispatcherService, store) {
        var _this = this;
        this.actions$ = actions$;
        this.treeActions = treeActions;
        this.nodeDispatcherService = nodeDispatcherService;
        this.store = store;
        this.register$ = this.actions$
            .ofType(TreeActionsService.TREE_REGISTER)
            .pipe(map(function (action) {
            if (action.payload.silent) {
                return _this.treeActions.setAllNodes(action.payload.treeId, action.payload.nodes);
            }
            else {
                return _this.treeActions.loadTree(action.payload.treeId, null);
            }
        }));
        this.load$ = this.actions$
            .ofType(TreeActionsService.TREE_LOAD)
            .pipe(mergeMap(function (action) {
            return _this.loadNodes(action.payload.treeId, action.payload.id)
                .pipe(map(function (nodesData) { return _this.treeActions.loadTreeSuccess(action.payload.treeId, action.payload.id, nodesData); }), catchError(function () { return Observable.of(_this.treeActions.loadTreeError(action.payload.treeId, action.payload.id)); }));
        }));
        this.delete$ = this.actions$
            .ofType(TreeActionsService.TREE_DELETE_NODE)
            .pipe(switchMap(function (action) {
            return _this.deleteNode(action.payload.treeId, action.payload.node)
                .pipe(map(function () { return _this.treeActions.deleteNodeSuccess(action.payload.treeId, action.payload.node); }), catchError(function () { return Observable.of(_this.treeActions.deleteNodeError(action.payload.treeId, action.payload.node)); }));
        }));
        this.save$ = this.actions$
            .ofType(TreeActionsService.TREE_SAVE_NODE)
            .pipe(switchMap(function (action) {
            return _this.saveNode(action.payload.treeId, __assign$1({}, action.payload.node))
                .pipe(map(function (node) { return _this.treeActions.saveNodeSuccess(action.payload.treeId, action.payload.node, node); }), catchError(function () { return Observable.of(_this.treeActions.saveNodeError(action.payload.treeId, action.payload.node)); }));
        }));
        this.move$ = this.actions$
            .ofType(TreeActionsService.TREE_MOVE_NODE)
            .pipe(filter(function (action) {
            return action.payload.sourceOfDroppedData === DragAndDrop.DROP_DATA_TYPE;
        }), switchMap(function (action) {
            var /** @type {?} */ source = __assign$1({}, action.payload.oldNode);
            var /** @type {?} */ target = Boolean(action.payload.node) ? __assign$1({}, action.payload.node) : null;
            return _this.moveNode(action.payload.treeId, source, target)
                .pipe(map(function (node) {
                return {
                    treeId: action.payload.treeId,
                    oldNode: action.payload.oldNode,
                    node: node
                };
            }), switchMap(function (data) {
                return _this.store.select(treeConfigurationSelector(action.payload.treeId))
                    .pipe(take(1), map(function (configuration) {
                    return {
                        configuration: configuration,
                        data: data
                    };
                }));
            }), catchError(function () {
                _this.treeActions.moveNodeError(action.payload.treeId, action.payload.oldNode, action.payload.node);
                return Observable.of(action.payload);
            }));
        }), mergeMap(function (value) {
            var /** @type {?} */ data = value.data;
            var /** @type {?} */ actions = [
                _this.treeActions.moveNodeSuccess(data.treeId, data.oldNode, data.node),
            ];
            if (!value.configuration.isFullyLoaded) {
                actions.push(_this.treeActions.loadTree(data.treeId, data.node.parentId));
            }
            return actions;
        }));
        this.insert$ = this.actions$
            .ofType(TreeActionsService.TREE_INSERT_NODE)
            .pipe(map(function (action) {
            return _this.treeActions.expandNode(action.payload.treeId, action.payload.id);
        }));
        this.initPathForFullyLoadedTreeEffect$ = this.actions$
            .ofType(TreeActionsService.TREE_LOAD_PATH)
            .pipe(switchMap(function (action) {
            return _this.store.select(treeConfigurationSelector(action.payload.treeId))
                .pipe(take(1), map(function (configuration) {
                return { action: action, configuration: configuration };
            }));
        }), map(function (value) {
            var action = value.action, configuration = value.configuration;
            if (configuration.isFullyLoaded) {
                return action.payload.ids.map(function (id) { return _this.treeActions.expandNode(action.payload.treeId, id); });
            }
            else {
                var /** @type {?} */ loadActions = action.payload.ids.map(function (id) { return _this.loadNodes(action.payload.treeId, id); });
                return Observable.combineLatest(loadActions)
                    .pipe(take(1), mergeMap(function (data) {
                    var /** @type {?} */ loadSuccess = data.map(function (nodes, index) { return _this.treeActions.loadTreeSuccess(action.payload.treeId, action.payload.ids[index], nodes); });
                    var /** @type {?} */ expandNodes = action.payload.ids.map(function (id) { return _this.treeActions.expandNode(action.payload.treeId, id); });
                    return loadSuccess.concat(expandNodes);
                }));
            }
        }), mergeMap(function (actions) { return actions; }));
    }
    /**
     * @param {?} treeId
     * @param {?} node
     * @return {?}
     */
    TreeEffectsService.prototype.deleteNode = /**
     * @param {?} treeId
     * @param {?} node
     * @return {?}
     */
    function (treeId, node) {
        var /** @type {?} */ nodeService = this.nodeDispatcherService.get(treeId);
        return node.id ? nodeService.remove(node.id) : Observable.of(node);
    };
    /**
     * @param {?} treeId
     * @param {?} id
     * @return {?}
     */
    TreeEffectsService.prototype.loadNodes = /**
     * @param {?} treeId
     * @param {?} id
     * @return {?}
     */
    function (treeId, id) {
        var /** @type {?} */ nodeService = this.nodeDispatcherService.get(treeId);
        return nodeService.load(id);
    };
    /**
     * @param {?} treeId
     * @param {?} node
     * @return {?}
     */
    TreeEffectsService.prototype.saveNode = /**
     * @param {?} treeId
     * @param {?} node
     * @return {?}
     */
    function (treeId, node) {
        var /** @type {?} */ nodeService = this.nodeDispatcherService.get(treeId);
        if (node.id === NEW_NODE_ID) {
            return nodeService.add(node, node.parentId);
        }
        else {
            return nodeService.update(node);
        }
    };
    /**
     * @param {?} treeId
     * @param {?} source
     * @param {?} target
     * @return {?}
     */
    TreeEffectsService.prototype.moveNode = /**
     * @param {?} treeId
     * @param {?} source
     * @param {?} target
     * @return {?}
     */
    function (treeId, source, target) {
        var /** @type {?} */ nodeService = this.nodeDispatcherService.get(treeId);
        return nodeService.move(source, target);
    };
    TreeEffectsService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    TreeEffectsService.ctorParameters = function () { return [
        { type: Actions, },
        { type: TreeActionsService, },
        { type: NodeDispatcherService, },
        { type: Store, },
    ]; };
    __decorate([
        Effect(),
        __metadata("design:type", Object)
    ], TreeEffectsService.prototype, "register$", void 0);
    __decorate([
        Effect(),
        __metadata("design:type", Object)
    ], TreeEffectsService.prototype, "load$", void 0);
    __decorate([
        Effect(),
        __metadata("design:type", Object)
    ], TreeEffectsService.prototype, "delete$", void 0);
    __decorate([
        Effect(),
        __metadata("design:type", Object)
    ], TreeEffectsService.prototype, "save$", void 0);
    __decorate([
        Effect(),
        __metadata("design:type", Object)
    ], TreeEffectsService.prototype, "move$", void 0);
    __decorate([
        Effect(),
        __metadata("design:type", Object)
    ], TreeEffectsService.prototype, "insert$", void 0);
    __decorate([
        Effect(),
        __metadata("design:type", Object)
    ], TreeEffectsService.prototype, "initPathForFullyLoadedTreeEffect$", void 0);
    return TreeEffectsService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TreeModelGeneratorService = /** @class */ (function () {
    function TreeModelGeneratorService(nodeDispatcherService, treeActionsDispatcher, store) {
        this.nodeDispatcherService = nodeDispatcherService;
        this.treeActionsDispatcher = treeActionsDispatcher;
        this.store = store;
    }
    /**
     * @param {?} configuration
     * @param {?=} nodes
     * @return {?}
     */
    TreeModelGeneratorService.prototype.createTreeModel = /**
     * @param {?} configuration
     * @param {?=} nodes
     * @return {?}
     */
    function (configuration, nodes) {
        if (nodes === void 0) { nodes = null; }
        var /** @type {?} */ treeId = configuration.treeId;
        var /** @type {?} */ isFullyLoaded = Boolean(nodes);
        // register new tree in store
        this.treeActionsDispatcher.registerTree(treeId, isFullyLoaded, nodes);
        // init tree configuration
        this.treeActionsDispatcher.setConfiguration(treeId, configuration);
        if (Boolean(nodes)) {
            this.nodeDispatcherService.get(treeId).setAllNodes(nodes);
            this.treeActionsDispatcher.markAsFullyLoaded(treeId);
        }
        var /** @type {?} */ folders$ = this.store.select(treeSelector(configuration.treeId));
        return new TreeModel(this.treeActionsDispatcher, folders$, configuration, isFullyLoaded);
    };
    TreeModelGeneratorService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    TreeModelGeneratorService.ctorParameters = function () { return [
        { type: NodeDispatcherService, },
        { type: TreeActionsDispatcherService, },
        { type: Store, },
    ]; };
    return TreeModelGeneratorService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ParentsListComponent = /** @class */ (function () {
    function ParentsListComponent(nodeDispatcherService) {
        this.nodeDispatcherService = nodeDispatcherService;
    }
    /**
     * @return {?}
     */
    ParentsListComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.parents$ = this.treeModel.getParentsList();
    };
    /**
     * @param {?} node
     * @param {?} isCurrentSelectedNode
     * @return {?}
     */
    ParentsListComponent.prototype.selectNode = /**
     * @param {?} node
     * @param {?} isCurrentSelectedNode
     * @return {?}
     */
    function (node, isCurrentSelectedNode) {
        if (!isCurrentSelectedNode) {
            this.nodeDispatcherService.selectNode(this.treeModel.treeId, node);
        }
    };
    ParentsListComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ri-tree-parents-list',
                    template: "\n    <ul class=\"ri-tree-parents-list\">\n      <li class=\"fa fa-home\" (click)=\"selectNode(null, false)\"></li>\n      <li *ngFor=\"let node of parents$ | async; last as isLast\" (click)=\"selectNode(node, isLast)\">{{node.name}}\n      </li>\n    </ul>\n  ",
                    styles: ["\n    .ri-tree-parents-list {\n      list-style-type: none;\n      margin: 0;\n      padding: 0;\n\n      li {\n        display: inline-block;\n        cursor: pointer;\n        color: #777777;\n\n        &:last-child, &:first-child, &:after {\n          color: #000000;\n        }\n\n        &:not(:last-child) {\n          &:after {\n            content: '/';\n            display: inline-block;\n            width: 10px;\n            text-align: center;\n          }\n        }\n      }\n    }\n  "]
                },] },
    ];
    /** @nocollapse */
    ParentsListComponent.ctorParameters = function () { return [
        { type: TreeActionsDispatcherService, },
    ]; };
    ParentsListComponent.propDecorators = {
        "treeModel": [{ type: Input },],
    };
    return ParentsListComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TreeModule = /** @class */ (function () {
    function TreeModule(translate) {
        this.translate = translate;
        this.setTranslationForEN();
        this.setTranslationForPL();
        this.translate.use('en');
    }
    /**
     * @param {?} nodeService
     * @return {?}
     */
    TreeModule.forRoot = /**
     * @param {?} nodeService
     * @return {?}
     */
    function (nodeService) {
        return {
            ngModule: TreeModule,
            providers: [
                DragAndDrop,
                NodeDispatcherService,
                TreeActionsDispatcherService,
                TreeActionsService,
                TreeEffectsService,
                TreeModelGeneratorService,
                { provide: NODE_SERVICE, useClass: nodeService, multi: true }
            ]
        };
    };
    /**
     * @param {?} nodeService
     * @return {?}
     */
    TreeModule.forFeature = /**
     * @param {?} nodeService
     * @return {?}
     */
    function (nodeService) {
        return {
            ngModule: TreeModule,
            providers: [
                DragAndDrop,
                NodeDispatcherService,
                TreeActionsDispatcherService,
                TreeActionsService,
                TreeEffectsService,
                TreeModelGeneratorService,
                { provide: NODE_SERVICE, useClass: nodeService, multi: true }
            ]
        };
    };
    /**
     * @return {?}
     */
    TreeModule.prototype.setTranslationForPL = /**
     * @return {?}
     */
    function () {
        this.translate.setTranslation('pl', {
            RI_TREE_LBL_ADD_NODE: 'Dodaj',
            RI_TREE_LBL_EDIT_NODE: 'Edytuj',
            RI_TREE_LBL_REMOVE_NODE: 'Usuń',
            RI_TREE_LBL_DROP_ZONE: 'Upuść tutaj'
        });
    };
    /**
     * @return {?}
     */
    TreeModule.prototype.setTranslationForEN = /**
     * @return {?}
     */
    function () {
        this.translate.setTranslation('en', {
            RI_TREE_LBL_ADD_NODE: 'Add data',
            RI_TREE_LBL_EDIT_NODE: 'Edit data',
            RI_TREE_LBL_REMOVE_NODE: 'Delete data',
            RI_TREE_LBL_DROP_ZONE: 'Drop here to move data to root level'
        });
    };
    TreeModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        ContextMenuModule,
                        DndModule,
                        EffectsModule.forFeature([TreeEffectsService]),
                        HttpClientModule,
                        FormsModule,
                        ReactiveFormsModule,
                        StoreModule.forFeature('trees', treeReducer),
                        TranslateModule,
                    ],
                    declarations: [
                        TreeComponent,
                        ItemComponent,
                        DraggableDirective,
                        DroppableDirective,
                        DropzoneComponent,
                        ParentsListComponent,
                    ],
                    exports: [
                        TreeComponent,
                        ItemComponent,
                        DraggableDirective,
                        DroppableDirective,
                        DropzoneComponent,
                        DraggableComponent,
                        ParentsListComponent,
                        StoreModule,
                        EffectsModule,
                    ],
                    providers: [
                        { provide: NODE_SERVICE, useClass: NodeService, multi: true }
                    ],
                    schemas: [CUSTOM_ELEMENTS_SCHEMA]
                },] },
    ];
    /** @nocollapse */
    TreeModule.ctorParameters = function () { return [
        { type: TranslateService, },
    ]; };
    return TreeModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { TreeModule, TreeComponent, expand, ItemComponent, TreeModel, NODE_SERVICE, NodeService, ParentsListComponent, NodeDispatcherService, TreeModelGeneratorService, TreeActionsService, TreeActionsDispatcherService, TreeEffectsService, NEW_NODE_ID, emptyTreeData, treeReducer, treeStateSelector, treeSelector, treeConfigurationSelector, DragAndDrop, DraggableDirective, DroppableDirective, DropzoneComponent };
