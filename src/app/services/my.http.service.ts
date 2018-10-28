import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {ServiceStatus} from '../services/status.service'



@Injectable()
export class ServiceMyHttp {

    private Url = 'https://node-cero.herokuapp.com';
    //private Url = 'http://localhost:3000';

    private UrlUser = this.Url + '/user';

    private UrlLogin = this.Url + '/login/';

    constructor(private http: Http,private ServiceStatus :ServiceStatus) { }

    async get(): Promise<any> {
        const value = await this.http.get(this.Url).toPromise();
        return value.json().data;
    }


    handleError(error){
              console.log(error);
    }


    async login(user): Promise<any> {

        try {
            let response = await this.http
              .post(this.UrlLogin, user)
              .toPromise();

              if(response.json().login){
                this.ServiceStatus.setStatus(response.json()['x-access-token']);

                return response.json().login;
              }
              else{
                return false;
              }             

          } catch (error) {
            await this.handleError(error);
          }      

    }

 
}
