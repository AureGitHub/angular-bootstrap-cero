import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import {HttpModule} from '@angular/http';

import {MyOwnHttp} from './services/my.own.http.service'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UiModule,
    HttpModule
  ],
  providers: [MyOwnHttp],
  bootstrap: [AppComponent]
})
export class AppModule { }
