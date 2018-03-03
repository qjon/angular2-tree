import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TreeModule} from '../../../../main';
import {TreeTwoComponent} from './treeTwo.component';
import {NewItemComponent} from './newItem.component';
import {TreeTwoNodeService} from './treeTwoNode.service';
import {TreeLocalStorageModule} from '../localStorage/treeLocalStorage.module';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    TreeTwoComponent,
    NewItemComponent
  ],
  exports: [TreeTwoComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    TreeLocalStorageModule,
    ReactiveFormsModule,
    TreeModule
  ],
  providers: [TreeTwoNodeService]
})
export class TreeTwoModule {
}
