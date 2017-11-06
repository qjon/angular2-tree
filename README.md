[![npm (scoped)](https://img.shields.io/npm/v/@rign/angular2-tree.svg)]()
[![Build Status](https://travis-ci.org/qjon/angular2-tree.svg?branch=master)](https://travis-ci.org/qjon/angular2-tree)
[![npm version](https://badge.fury.io/js/%40rign%2Fangular2-tree.svg)](https://badge.fury.io/js/%40rign%2Fangular2-tree.svg)
[![npm](https://img.shields.io/npm/dm/@rign\/angular2-tree.svg)](https://img.shields.io/npm/dm/@rign\/angular2-tree.svg)
[![npm](https://img.shields.io/npm/l/@rign\/angular2-tree.svg)](https://github.com/qjon/angular2-tree/blob/master/LICENSE)

# angular2-tree

## Installation

    npm i @rign/angular2-tree
   

## Usage
    
Include _TreeModule_  in your application module and create Store with empty state and initialize Effects

    import {TreeModule} from '@rign/angular2-tree/main';
    
    @NgModule({
      declarations: [
        ...
      ],
      imports: [
        ...
        TreeModule,
        EffectsModule.forRoot([]),
        StoreModule.forRoot({})
      ]
    })
    
You need also init translations module, because Tree needs it to translate all labels. 

    @NgModule({
      declarations: [
        ...
      ],
      imports: [
        ...
        TranslationModule.forRoot(),
        TreeModule
      ]
    })
    
More information about translations you can find below in section _Translation_.
    
In any html file put 

    <ri-tree [treeModel]="treeModel"></ri-tree>
    
Create your own loader service as it is done in example        

    @Injectable()
    export class AppNodeService extends NodeService {
      protected apiConfig = {
        addUrl: '/api/nodes',
        getUrl: '/api/nodes',
        updateUrl: '/api/nodes',
        removeUrl: '/api/nodes',
      }
    }

and use it to load data. Or you can extend and rewrite all methods of that service to store your data wherever you want. See example _localStorage.service.ts_


In component where you create tree, you should register _tree store_, create _TreeModel_ and load root tree

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
    
      public constructor(private store: Store<ITreeState>,
                         private treeActions: TreeActionsService,
                         private nodeDispatcherService: NodeDispatcherService,
                         private appNodeService: AppNodeService) {
      }
    
      public ngOnInit() {
        const treeId = this.treeConfiguration.treeId;
        this.nodeDispatcherService.register(treeId, this.appNodeService);
    
        this.store.dispatch(this.treeActions.registerTree(treeId));
    
        this.folders = this.store.select(treeStateSelector)
          .map((data: ITreeState) => {
            return data[treeId];
          })
          .filter((data: ITreeData) => !!data)
        ;
        this.treeModel = new TreeModel(this.folders, this.treeConfiguration);
      }
    }


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

## Events(Actions)

Using _ngrx/store_ you can listen on below actions and do whatever you want:

    TreeActionsService.TREE_SAVE_NODE
    TreeActionsService.TREE_SAVE_NODE_SUCCESS
    TreeActionsService.TREE_SAVE_NODE_ERROR
    TreeActionsService.TREE_DELETE_NODE
    TreeActionsService.TREE_DELETE_NODE_SUCCESS
    TreeActionsService.TREE_DELETE_NODE_ERROR
    TreeActionsService.TREE_EDIT_NODE_START
    TreeActionsService.TREE_EXPAND_NODE
    TreeActionsService.TREE_LOAD
    TreeActionsService.TREE_LOAD_SUCCESS
    TreeActionsService.TREE_LOAD_ERROR
    TreeActionsService.TREE_MOVE_NODE
    TreeActionsService.TREE_MOVE_NODE_SUCCESS
    TreeActionsService.TREE_MOVE_NODE_ERROR
    TreeActionsService.TREE_REGISTER

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

### v2.2.0
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

## License

Licensed under [MIT](https://github.com/qjon/angular2-tree/blob/master/LICENSE).
