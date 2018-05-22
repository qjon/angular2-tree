# angular2-tree

Simple component to display tree structure

[![npm (scoped)](https://img.shields.io/npm/v/@rign/angular2-tree.svg)]()
[![Build Status](https://travis-ci.org/qjon/angular2-tree.svg?branch=master)](https://travis-ci.org/qjon/angular2-tree)
[![npm version](https://badge.fury.io/js/%40rign%2Fangular2-tree.svg)](https://badge.fury.io/js/%40rign%2Fangular2-tree.svg)
[![npm](https://img.shields.io/npm/dm/@rign\/angular2-tree.svg)](https://img.shields.io/npm/dm/@rign\/angular2-tree.svg)
[![npm](https://img.shields.io/npm/l/@rign\/angular2-tree.svg)](https://github.com/qjon/angular2-tree/blob/master/LICENSE)

## Installation

    npm i @rign/angular2-tree
   

## Usage    
    
First you have to create your own loader service        

    @Injectable()
    export class AppNodeService extends NodeService {
      public get treeId(): string {
        return 'tree';
      }
      
      protected apiConfig = {
        addUrl: '/api/nodes',
        getUrl: '/api/nodes',
        updateUrl: '/api/nodes',
        removeUrl: '/api/nodes',
      }
    }

and use it to load/save/delete/etc. your node data. Or you can extend and rewrite all methods of that service to store your data wherever you want. See example _localStorage.service.ts_
    
Include _TreeModule_  in your application module and create Store with empty state and initialize Effects. Do not forget to pass yours _AppNodesService_ as a parameter of _TreeModule_.  

    import {TreeModule} from '@rign/angular2-tree';
    
    @NgModule({
      declarations: [
        ...
      ],
      imports: [
        ...
        TreeModule.forRoot(AppNodeService),
        EffectsModule.forRoot([]),
        StoreModule.forRoot({})
      ]
    })
    
You need also init translations and animations module, because Tree needs it to translate all labels and animate expanding and collapsing. 

    @NgModule({
      declarations: [
        ...
      ],
      imports: [
        ...
        BrowserAnimationsModule,
        TranslateModule.forRoot(),
        TreeModule.forRoot(AppNodeService)
      ]
    })
    
More information about translations you can find below in section _Translation_.
    
In any html file put 

    <ri-tree [treeModel]="treeModel"></ri-tree>

In component where you create tree, you should create _TreeModel_.

    export class MyTreeComponent implements OnInit {
      public folders: Observable<ITreeData>;
    
      public contextMenu: IContextMenu[] = [];
    
      public treeConfiguration: IConfiguration = {
        showAddButton: true,
        disableMoveNodes: false,
        treeId: 'tree3',
        dragZone: 'tree3',
        dropZone: ['tree3'],
        isAnimation: true     // add animation to action "expand" and "collapse"
      };
    
      public treeModel: TreeModel;
    

      public constructor(private treeModelGenerator: TreeModelGeneratorService) {
      }
    
      public ngOnInit() {
        this.treeModel = this.treeModelGenerator.createTreeModel(this.treeConfiguration);
      }
    }
    
If function _createTreeModel_ has got second parameter - array of nodes, then the tree will be marked as fully loaded. It will not use _load API_ function to get new subnodes it will use only passed nodes. 

### CSS Styles

To load default CSS styles and makes our tree looks nice you have to add 2 CSS files to your _angular-cli.json_ file:

    ...
    "styles": [
      "../node_modules/bootstrap/dist/css/bootstrap.css",
      "../node_modules/font-awesome/css/font-awesome.css",
      "../node_modules/@rign/angular2-tree/styles.css",
      "styles.css"
    ],
  

### Create own item template

Also you can use your own template to display items. You can do that when you extend _ItemComponent_

    @Component({
      selector: 'new-tree-item',
      templateUrl: './newItem.component.html',
      styleUrls: ['./newItem.component.less']
    })
    export class NewItemComponent extends ItemComponent {
    
    }
    
and _newItem.component.html_

    <div class="tree-item row"
         [ngClass]="{'tree-item-selected': isSelected}"
         riDroppable
         riDraggable
         [dragZone]="treeModel.configuration.dragZone"
         [dropConfig]="{dropAllowedCssClass: 'drop-enabled', dropZone: treeModel.configuration.dropZone}"
         [data]="node"
         id="node-{{node-id}}"
    >
      <div class="col-sm-8">
        <i *ngIf="!isExpanded" (click)="expand()" class="fa fa-plus pointer"></i>
        <i *ngIf="isExpanded" (click)="collapse()" class="fa fa-minus pointer"></i>
        <span *ngIf="!isEditMode" class="tree-item-name" (click)="onSelect()">{{node.name}}</span>
        <form name="form">
          <input #inputElement type="text" class="form-control" *ngIf="isEditMode" [formControl]="nameField"
                 name="name" (keydown)="onChange($event)" (blur)="onBlur($event)"/>
        </form>
      </div>
      <div class="col-sm-4 text-right">
          <span class="btn-group btn-group-sm">
            <button class="btn btn-primary" (click)="onEdit($event)" [disabled]="isEditMode">
              <i class="fa fa-edit"></i>
            </button>
            <button class="btn btn-danger" (click)="onDelete()" [disabled]="isEditMode">
              <i class="fa fa-trash"></i>
            </button>
          </span>
      </div>
    </div>
    <div class="tree" [@isExpanded]="animationState" (@isExpanded.done)="onAnimationDone($event)">
      <div *ngIf="isExpanded">
        <new-tree-item  *ngFor="let child of children$ | async" [node]="child" [treeModel]="treeModel" [contextMenu]="contextMenu"></new-tree-item>
      </div>
    </div>

    
Then when you create tree component in your application use such construction

    <rign-tree [treeModel]="treeModel">
      <new-tree-item *ngFor="let node of treeModel.getRootNodes() | async" [node]="node" [treeModel]="treeModel" [contextMenu]="contextMenu"></new-tree-item>
    </rign-tree>
    
and that is all. Please see Demo where is such example.

### Open initial path

If you would like to open some path at the begin you can do that invoking such method after creating _TreeModel_.

     this.treeModel.initPath([
       // list of node ids sorted by level of node (grandparent id, parent id, child id)
     ]);
      
### Display parents path

From version 3.0.0 there is possibility to display current selected node path. To do that place in your component html file such code:

    <ri-tree-parents-list [treeModel]="treeModel"></ri-tree-parents-list>
    
The _treeModel_ value is the same object that is used in _ri-tree_.

## Events(Actions)

Using _ngrx/store_ you can listen on below actions and do whatever you want:

    TreeActionsService.TREE_SAVE_NODE
    TreeActionsService.TREE_SAVE_NODE_ERROR
    TreeActionsService.TREE_SAVE_NODE_SUCCESS
    TreeActionsService.TREE_DELETE_NODE
    TreeActionsService.TREE_DELETE_NODE_ERROR
    TreeActionsService.TREE_DELETE_NODE_SUCCESS
    TreeActionsService.TREE_EDIT_NODE_START
    TreeActionsService.TREE_EXPAND_NODE
    TreeActionsService.TREE_LOAD
    TreeActionsService.TREE_LOAD_ERROR
    TreeActionsService.TREE_LOAD_SUCCESS
    TreeActionsService.TREE_LOAD_PATH
    TreeActionsService.TREE_MOVE_NODE
    TreeActionsService.TREE_MOVE_NODE_ERROR
    TreeActionsService.TREE_MOVE_NODE_SUCCESS
    TreeActionsService.TREE_REGISTER
    TreeActionsService.TREE_SET_ALL_NODES
    TreeActionsService.TREE_SELECT_NODE

## Translation

Tree module has configured translation for english (default language) and polish. You can add translations for other languages as it is described in [Translate Module](https://github.com/ngx-translate/core/blob/master/README.md) documentation.
In _Tree Module_ you are able to set following labels:

* RI_TREE_LBL_ADD_NODE - Add node
* RI_TREE_LBL_EDIT_NODE - Edit node
* RI_TREE_LBL_REMOVE_NODE - Delete node
* RI_TREE_LBL_DROP_ZONE - Drop here to move node to root level

To change language to polish you have to add these lines to your app module:

    export class AppModule {
      public constructor(translate: TranslateService) {
        translate.use('pl');
      }
    }
    
## Drop elements on tree node

Now you have new possibilities to move different elements to the tree (files or other data). To do that, you have to use _riDraggable_ directive in following way

    <div ri-draggable [dragZone]="treeModel.configuration.dragZone" [data]="your_data" [sourceType]="'YOUR_SOURCE_TYPE'">Drag element</div>  
    
where:
* _your_data_ - is any object
* _YOUR_SOURCE_TYPE_ - is any type of string which allow you to filter drop effect

Then you have to create _@Effects_ similar to that one in _[treeEffects.service](src/store/treeEffects.service.ts)_or create only Observable and subscribe to it.

    @Effect() move$ = this.actions$
      .ofType(TreeActionsService.TREE_MOVE_NODE)
      .pipe(
        filter((action: ITreeAction) => {
          return action.payload.sourceOfDroppedData === DragAndDrop.DROP_DATA_TYPE;
        }) 
      )
      ...
      
but you have to replace 

    .ofType(TreeActionsService.TREE_MOVE_NODE)

to 

    .ofType('YOUR_SOURCE_TYPE')
      
At the end do not forget to add this effects to your app.
 
## Changes

### v3.0.0
* change the way of injecting NodeService provider
* change tree state - add root nodes list
* save tree configuration in store (action: TREE_SET_CONFIGURATION)
* save selected node in the store (action: TREE_SELECT_NODE)
* display current selected node parents path with navigation
* add possibility to open path of the tree
  
### v2.3.0
* fix problem with building tree component in AOT
* fix few small issues

### v2.2.0
* add _forRoot_ static method
* change translation module to _ng2-translate_
* upgrade angular to verison _^5.0.0_
* upgrade @ngrx/store to version ^4.1.0 (use _forFeature_ to init store and effects)
* rename selector __ri-tree__

### v2.1.1
* fix bug with adding new node to root element

### v2.1.0
* add translation module
* drop elements on tree nodes 
* update and lock of some npm package versions
* add possibility to animate action _collapse_ and _expand_ nodes of tree, using in configuration property _isAnimation: true_

### v2.0.1
* add [MIT LICENSE](https://github.com/qjon/angular2-tree/blob/master/LICENSE)

### v2.0.0
* use ngrx/store to store data
* use actions and effects instead of events
* add TravisCI configuration
* remove backend example, move all functionality of demo to local storage

### v1.0.0

* use ngrx/store
* remove events ITreeItemEvents - use Actions and Effects
* remove NodeModel
* simplify using tree

### v0.8.1

* fix package.json

### v0.8.0

* allow to create own template for tree item (if not specify it use default) - look in demo
* input option _disableContextMenu_ to disable context menu (default: false)
* update Demo - add alternative view of tree

### v0.7.0

* remove API config service (see section _Usage_)

### v0.6.2

* change name FolderService to NodeService
* change params names from _dirId_ to _nodeId_
* now you can use in your API paths parameter _{nodeId}_ which will be replaced on _nodeId_

### v0.6.1

* expose _ConfigService_ - it allow override urls for create, edit, and delete folder

### v0.6.0

* upgrade angular/cli to version _beta.32.3_
* fix demo

### v0.5.0

* primary version with all features described below.


## Demo

Working demo with _local storage_ you can find [here](https://qjon.github.io/angular2-tree/).
To run Demo locally clone this repository and run

    npm start

## License

Licensed under [MIT](https://github.com/qjon/angular2-tree/blob/master/LICENSE).
