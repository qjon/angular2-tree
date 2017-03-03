import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ItemComponent} from './item/item.component';
import {NodeService} from './node.service';
import {ConfigService} from './config.service';
import {HttpModule} from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ContextMenuModule} from 'angular2-contextmenu';
import {TreeComponent} from './tree.component';

@NgModule({
  imports: [
    CommonModule,
    ContextMenuModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [TreeComponent, ItemComponent],
  exports: [TreeComponent],
  providers: [NodeService, ConfigService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TreeModule {
}
