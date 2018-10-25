

import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';



@Injectable()
export class MyOwnHttp {

    private Url = 'https://node-cero.herokuapp.com/user';

    constructor(private http: Http) { }

    async get(): Promise<any> {
        const value = await this.http.get(this.Url).toPromise();        
        return value.json().data;
    }

   
}
