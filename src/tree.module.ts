import {
  NgModule, CUSTOM_ELEMENTS_SCHEMA, ModuleWithProviders, Provider,
  ANALYZE_FOR_ENTRY_COMPONENTS
} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ItemComponent} from './item/item.component';
import {NodeService} from './node.service';
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
  exports: [TreeComponent, ItemComponent],
  providers: [NodeService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TreeModule {
  static forRoot(data: {providers?: Provider[]}): ModuleWithProviders {
    let providers: Provider[] = data.providers;

    providers.push({provide: ANALYZE_FOR_ENTRY_COMPONENTS, multi: true, useValue: providers});

    return {
      ngModule: TreeModule,
      providers: providers
    }
  }
}
