import { Component, OnInit } from '@angular/core';
import {ServiceStatus} from '../services/status.service'
import {Router} from '@angular/router';

@Component({
  selector: 'app-logout',
  template: `
  <div class="container">
  <div class="jumbotron">
    <h1>Logout</h1>      
    <p>Atención: se va a desconectar de la aplicación.</p>

    <button type="button" class="btn btn-danger" (click) = "desconectar()">
    <span class="glyphicon glyphicon-search"></span> Desconectar 
  </button>

  </div>
  
</div>
  `,
  styles: []
})
export class LogoutdComponent implements OnInit {

  constructor(private ServiceStatus :ServiceStatus,private router: Router) { }

  desconectar(){
    this.ServiceStatus.logout();

    this.router.navigateByUrl('/home', {skipLocationChange: true});


  }

  ngOnInit() {
  }

}
