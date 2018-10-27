import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NofoundComponent } from './nofound.component';
import { RouterModule, Routes } from "@angular/router";

const routes : Routes =[
  { 
    path: '', 
    component: NofoundComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
     RouterModule.forChild(routes)
  ],
  declarations: [NofoundComponent]
})
export class NofoundModule { }