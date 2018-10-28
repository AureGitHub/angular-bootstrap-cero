import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import {Routes, RouterModule} from '@angular/router';


const routes: Routes = [
  {
    path: '',
    /*si aqui pongo un componente, entonces me carga el modulo al que pertenece. Para que
    no haga la carga hasta que se utiliza se utiliza loadchildren. Al ponerle un string a load children,
    la carga es  dinámica*/
    loadChildren: './../home/home.module#HomeModule'
  },

  {
    path: 'login',
    loadChildren: './../login/login.module#LoginModule'
  },
  {
    path: 'logout',
    loadChildren: './../logout/logout.module#LogoutModule'
  },

  {
    path: 'about',
    loadChildren: './../about/about.module#AboutModule'
  },

  {
    path: '**',
    /*si aqui pongo un componente, entonces me carga el modulo al que pertenece. Para que
    no haga la carga hasta que se utiliza se utiliza loadchildren. Al ponerle un string a load children,
    la carga es  dinámica*/
    loadChildren: './../nofound/nofound.module#NofoundModule'
  }



];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  declarations: [LayoutComponent, HeaderComponent, FooterComponent],
  exports: [LayoutComponent]
})
export class UiModule { }
