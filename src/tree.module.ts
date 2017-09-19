import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ItemComponent} from './item/item.component';
import {NodeService} from './service/node.service';
import {HttpModule} from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ContextMenuModule} from 'angular2-contextmenu';
import {TreeComponent} from './tree.component';
import {DndModule} from 'ng2-dnd';
import {DragAndDrop} from './dragAndDrop/dragAndDrop.service';
import {Draggable} from './dragAndDrop/draggable.directive';
import {Droppable} from './dragAndDrop/droppable.directive';
import {DropzoneComponent} from './dragAndDrop/dropzone/dropzone.component';
import {TreeActionsService} from './store/treeActions.service';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {TreeEffectsService} from './store/treeEffects.service';
import {NodeDispatcherService} from './service/nodesDispatcher.service';
import {TranslateModule, TranslateService} from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    ContextMenuModule,
    DndModule.forRoot(),
    EffectsModule.run(TreeEffectsService),
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    StoreModule
  ],
  declarations: [TreeComponent, ItemComponent, Draggable, Droppable, DropzoneComponent],
  exports: [TreeComponent, ItemComponent, Draggable, Droppable, DropzoneComponent, StoreModule, EffectsModule],
  providers: [DragAndDrop, NodeService, TreeActionsService, TreeEffectsService, NodeDispatcherService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TreeModule {
  public constructor(private translate: TranslateService) {
    this.setTranslationForEN();
    this.setTranslationForPL();
    this.translate.use('en');
  }

  private setTranslationForPL(): void {
    this.translate.setTranslation('pl', {
      RI_TREE_LBL_ADD_NODE: 'Dodaj',
      RI_TREE_LBL_EDIT_NODE: 'Edytuj',
      RI_TREE_LBL_REMOVE_NODE: 'Usuń',
      RI_TREE_LBL_DROP_ZONE: 'Upuść tutaj'
    });
  }

  private setTranslationForEN(): void {
    this.translate.setTranslation('en', {
      RI_TREE_LBL_ADD_NODE: 'Add node',
      RI_TREE_LBL_EDIT_NODE: 'Edit node',
      RI_TREE_LBL_REMOVE_NODE: 'Delete node',
      RI_TREE_LBL_DROP_ZONE: 'Drop here to move node to root level'
    });
  }
}
