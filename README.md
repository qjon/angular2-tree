# angular2-tree

## Installation

    npm i @rign/angular2-tree
    
## Changes

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

## Usage
    
Include _TreeModule_ in your application module;

    import {TreeModule} from '@rign/angular2-tree/main';
    
    @NgModule({
      declarations: [
        ...
      ],
      imports: [
        ...
        TreeModule
      ]
    })
    
In any html file put 

    <rign-tree
      [showAddButton]="true"
      [nodes]="folders"
      [menu]="contextMenu"
      (onAdd)="onAdd($event)"
      (onChange)="onChange($event)"
      (onRemove)="onRemove($event)"
      (onToggle)="onToggle($event)"
      (onSelect)="onSelect($event)"
    ></rign-tree>
    
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

and use it to load data.

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

    <div class="tree-item row" (contextmenu)="onContextMenu($event, node)" [ngClass]="{'tree-item-selected': node.isSelected}">
        <div class="col-sm-8">
          <i *ngIf="!node.isExpanded()" (click)="node.expand()" class="fa fa-plus pointer"></i>
          <i *ngIf="node.isExpanded()" (click)="node.collapse()" class="fa fa-minus pointer"></i>
          <span *ngIf="!node.editMode" class="tree-item-name" (click)="node.onSelect()">{{node.name}}</span>
          <form name="form">
              <input #inputElement type="text" class="form-control" *ngIf="node.editMode" [formControl]="nameField"
                     [(ngModel)]="node.name" name="name" (keydown)="onChange($event)" (blur)="onBlur($event)"/>
          </form>
        </div>
        <div class="col-sm-4 text-right">
          <span class="btn-group btn-group-sm">
            <button class="btn btn-primary" (click)="node.setEditMode(true)" [disabled]="node.editMode">
              <i class="fa fa-edit"></i>
            </button>
            <button class="btn btn-danger" (click)="node.onRemove()" [disabled]="node.editMode">
              <i class="fa fa-trash"></i>
            </button>
          </span>
        </div>
    </div>
    <div class="tree" *ngIf="node.isExpanded() && node.hasChildren()">
        <new-tree-item *ngFor="let child of node.children" [node]="child"></new-tree-item>
    </div>
    
Then when you create tree component in your application use such construction

    <rign-tree
      ...
    >
        <new-tree-item *ngFor="let node of treeComponent.tree.nodes" [node]="node"></new-tree-item>
    </rign-tree>
    
and that is all. Please see Demo where is such example.


## Parameters

* __showAddButton__ - show/hide add button at the top
* __nodes__ - list of nodes in root directory (_NodeModels[]_)
* __menu__ - context menu items (_IContextMenu[]_)

## Events

* __onAdd($event)__ - fired after add new node to tree
* __onChange($event)__ - fired after change name
* __onSelect($event)__ - fired after selection
* __onRemove($event)__ - fired after remove node
* __onToggle($event)__ - fired after expand or collapse

Each of above _$event_ parameter is _ITreeItemEvent_ which contains:

* _eventName_: string - event name
* _node_: NodeModel - current node on which the event is fired
* _status_: boolean - optional parameter (used in _onToggle_ event: _true_ - expand , _false_ - collapse)
    
## Demo

In folder _demo_ you can find application which use _TreeModule_

To run this example run in console:
    
* frontend
    
        npm start
        
* backend (be sure that directory _demo/backend/data_ has permissions to write)

        npm run backend
