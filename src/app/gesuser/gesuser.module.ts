import { PagerService } from './gesuser.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GesUserComponent } from './gesuser.component';
import { RouterModule, Routes } from '@angular/router';

const routes : Routes =[
  { 
    path: '', 
    component: GesUserComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
     RouterModule.forChild(routes)
  ],
  declarations: [GesUserComponent],
   providers: [PagerService],
})
export class GesUserModule { }