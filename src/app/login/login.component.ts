import { Component, OnInit } from '@angular/core';
import {ServiceStatus} from '../services/status.service'
import {ServiceMyHttp} from '../services/my.http.service'
import {Router} from '@angular/router';

class UserLogin{
  public identificador: string;
  public password: string;
  constructor(){}
}


@Component({
  selector: 'app-home',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit { 

  constructor(private ServiceStatus :ServiceStatus,private ServiceMyHttp:ServiceMyHttp,private router: Router) { }

  user = new  UserLogin();

  ngOnInit() {
    this.user.identificador ="jdesande";
    this.user.password ="123456";
  }

  myFunc(){
    this.ServiceStatus.TestConnect();
  }

  

  async onSubmit() {      
    
      var login = await this.ServiceMyHttp.login(this.user);

      if(login)     
        this.router.navigateByUrl('/home');
      else{
        this.ServiceStatus.msgError('usuario/password erróneo');
      }

      var a='';
    
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.user); }

}
