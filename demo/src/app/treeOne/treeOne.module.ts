import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TreeModule} from '../../../../main';
import {TreeOneNodeService} from './treeOneNode.service';
import {TreeOneComponent} from './treeOne.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [TreeOneComponent],
  exports: [TreeOneComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    TreeModule
  ],
  providers: [
    TreeOneNodeService,
  ]
})
export class TreeOneModule {
}
