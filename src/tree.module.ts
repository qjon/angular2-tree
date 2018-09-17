import {CUSTOM_ELEMENTS_SCHEMA, ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ItemComponent} from './item/item.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TreeComponent} from './tree.component';
import {DndModule, DraggableComponent} from 'ng2-dnd';
import {DragAndDrop} from './dragAndDrop/dragAndDrop.service';
import {DraggableDirective} from './dragAndDrop/draggable.directive';
import {DroppableDirective} from './dragAndDrop/droppable.directive';
import {DropzoneComponent} from './dragAndDrop/dropzone/dropzone.component';
import {TreeActionsService} from './store/treeActions.service';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {TreeEffectsService} from './store/treeEffects.service';
import {NodeDispatcherService} from './service/nodesDispatcher.service';
import {TranslateModule, TranslateService} from 'ng2-translate';
import {HttpClientModule} from '@angular/common/http';
import {ContextMenuModule} from 'ngx-contextmenu';
import {treeReducer} from './store/treeReducer';
import {TreeModelGeneratorService} from './service/treeModelGenerator.service';
import {TreeActionsDispatcherService} from './store/treeActionsDispatcher.service';
import {ParentsListComponent} from './parents-list/parents-list.component';
import {NODE_SERVICE, NodeService} from './service/node.service';
import {TreeInitializerService} from './service/initializer.service';

@NgModule({
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
    {provide: NODE_SERVICE, useClass: NodeService, multi: true}
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TreeModule {

  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: TreeModule,
      providers: [
        DragAndDrop,
        NodeDispatcherService,
        TreeActionsDispatcherService,
        TreeActionsService,
        TreeEffectsService,
        TreeInitializerService,
        TreeModelGeneratorService,
      ]
    }
  }

  /**
   * @Deprecated In version 4.0.0
   *
   * Instead of this function use TreeModule.forRoot in main application,
   * in other modules only import TreeModule
   */
  public static forFeature(): ModuleWithProviders {
    return TreeModule.forRoot()
  }

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
      RI_TREE_LBL_ADD_NODE: 'Add data',
      RI_TREE_LBL_EDIT_NODE: 'Edit data',
      RI_TREE_LBL_REMOVE_NODE: 'Delete data',
      RI_TREE_LBL_DROP_ZONE: 'Drop here to move data to root level'
    });
  }
}

