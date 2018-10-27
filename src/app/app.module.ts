import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import {HttpModule} from '@angular/http';

import {ServiceMyHttp} from './services/my.http.service'
import {ServiceStatus} from './services/status.service'

import { RouterModule, Routes } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UiModule,
    HttpModule
  ],
  providers: [ServiceMyHttp,ServiceStatus],
  bootstrap: [AppComponent]
})
export class AppModule { }
