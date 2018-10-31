import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { PagerService } from 'src/app/gesuser/gesuser.service';


@Component({
  selector: 'app-nofound',
  templateUrl: './gesuser.component.html',
  styles: []
})
export class GesUserComponent implements OnInit {

  constructor(private http: Http, private pagerService: PagerService) { }

   private allItems: any[];

  pager: any = {};

    // paged items
    pagedItems: any[];

    ngOnInit() {
        // get dummy data
        this.http.get('/assets/dummy-data.json').toPromise().then(
          (respone) => {
             this.allItems = respone.json();
              this.setPage(1);
          }

        );
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
