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
import {TranslateModule, TranslateService} from 'ng2-translate';

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
    TranslateModule.forRoot(),
    StoreModule.provideStore({trees: treeReducer}),
    StoreDevtoolsModule.instrumentOnlyWithExtension({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  public constructor(translate: TranslateService) {
    translate.use('en');
  }
}
