# angular2-tree

## Installation

    npm i @rign/angular2-tree
    
## Changes

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
