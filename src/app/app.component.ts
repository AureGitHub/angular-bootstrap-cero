import { Component, OnInit } from '@angular/core';
import {ServiceStatus} from './services/status.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'app';

  user ={}
  lista =[]

  constructor(private ServiceStatus:ServiceStatus){}



  async ngOnInit() {
   // this.lista = await this.ServiceMyHttp.get();

   this.ServiceStatus.reload();

  }

}
