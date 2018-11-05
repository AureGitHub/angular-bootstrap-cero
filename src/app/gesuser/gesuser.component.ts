import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { PagerService } from 'src/app/gesuser/gesuser.service';
import {ServiceMyHttp} from '../services/my.http.service'


@Component({
  selector: 'app-nofound',
  templateUrl: './gesuser.component.html',
  styles: []
})
export class GesUserComponent implements OnInit {

  constructor(private ServiceMyHttp:ServiceMyHttp, private pagerService: PagerService) { }

   private allItems: any[];

  pager: any = {};

    // paged items
    pagedItems: any[];

    async ngOnInit() {
        // get dummy data


        const users = await this.ServiceMyHttp.Get('/user',null);

        this.allItems = users;
        this.setPage(1);       
    }

    setPage(page: number) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }

        // get pager object from service
        this.pager = this.pagerService.getPager(this.allItems.length, page);

        // get current page of items
        this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
    }

}
