import { Component, OnInit } from '@angular/core';
import {ServiceMyHttp} from './services/my.http.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'app';

  user ={}
  lista =[]

  constructor(private ServiceMyHttp:ServiceMyHttp){}



  async ngOnInit() {
   // this.lista = await this.ServiceMyHttp.get();
  }

}
