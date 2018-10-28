import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoutdComponent } from './logout.component';
import { RouterModule, Routes } from "@angular/router";

const routes : Routes =[
  { 
    path: '', 
    component: LogoutdComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
     RouterModule.forChild(routes)
  ],
  declarations: [LogoutdComponent]
})
export class LogoutModule { }