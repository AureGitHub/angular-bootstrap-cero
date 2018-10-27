import { Component, OnInit } from '@angular/core';
import {ServiceStatus} from '../services/status.service'
import {ServiceMyHttp} from '../services/my.http.service'

class User{
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

  constructor(private ServiceStatus :ServiceStatus,private ServiceMyHttp:ServiceMyHttp) { }

  user = new  User();

  ngOnInit() {
    this.user.identificador ="jdesande";
    this.user.password ="123456";
  }

  myFunc(){
    this.ServiceStatus.TestConnect();
  }

  

  async onSubmit() {     
    
      var login = await this.ServiceMyHttp.login(this.user);
      var a='';
    
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.user); }

}
