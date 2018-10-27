import { Component, OnInit } from '@angular/core';
import {ServiceStatus} from '../services/status.service'

@Component({
  selector: 'app-home',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit { 

  constructor(private ServiceStatus :ServiceStatus) { }

  ngOnInit() {
  }

  myFunc(){
    this.ServiceStatus.TestConnect();
  }

}
