import { Component, OnInit } from '@angular/core';
import {MyOwnHttp} from './services/my.own.http.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'app';

  user ={}
  lista =[]

  constructor(private MyOwnHttp:MyOwnHttp){}

  async ngOnInit() {
    this.lista = await this.MyOwnHttp.get();
  }

}
