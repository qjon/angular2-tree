import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {TreeModule} from '../../../../main';
import {TreeOneComponent} from "./treeOne.component";
import {TreeOneNodeService} from "./treeOneNode.service";

@NgModule({
  declarations: [
    TreeOneComponent
  ],
  exports: [TreeOneComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TreeModule
  ],
  providers: [TreeOneNodeService]
})
export class TreeOneModule {
}
