import { Component, OnInit } from '@angular/core';
import {ServiceStatus} from '../../services/status.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  navbarOpen = false;
  constructor(private ServiceStatus:ServiceStatus) { }

  private Isconnect=false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  ngOnInit() {
    this.Isconnect=this.ServiceStatus.IsConnect();
  }

}
