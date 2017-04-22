import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ItemComponent} from './item/item.component';
import {NodeService} from './node.service';
import {HttpModule} from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ContextMenuModule} from 'angular2-contextmenu';
import {TreeComponent} from './tree.component';
import {DndModule} from "ng2-dnd";
import {DragAndDrop} from "./dragAndDrop/dragAndDrop.service";
import {Draggable} from "./dragAndDrop/draggable.directive";
import {Droppable} from "./dragAndDrop/droppable.directive";
import {DropzoneComponent} from "./dragAndDrop/dropzone/dropzone.component";

@NgModule({
  imports: [
    CommonModule,
    ContextMenuModule,
    DndModule.forRoot(),
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [TreeComponent, ItemComponent, Draggable, Droppable, DropzoneComponent],
  exports: [TreeComponent, ItemComponent, Draggable, Droppable, DropzoneComponent],
  providers: [DragAndDrop, NodeService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TreeModule {

}
