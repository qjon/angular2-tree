import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {TreeOneModule} from './treeOne/treeOne.module';
import {TreeTwoModule} from './treeTwo/treeTwo.module';
import {StoreModule} from '@ngrx/store';
import {treeReducer} from '../../../main';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TreeTwoModule,
    TreeOneModule,
    StoreModule.provideStore({trees: treeReducer}),
    StoreDevtoolsModule.instrumentOnlyWithExtension({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
