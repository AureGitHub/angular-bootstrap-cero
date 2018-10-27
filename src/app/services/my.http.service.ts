import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable()
export class ServiceMyHttp {

    //private Url = 'https://node-cero.herokuapp.com';
    private Url = 'http://localhost:3000';

    private UrlUser = this.Url + '/user';

    private UrlLogin = this.Url + '/login/';

    constructor(private http: Http) { }

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

              console.log(response.headers.get('x-access-token'));

            return response.json().data;
          } catch (error) {
            await this.handleError(error);
          }      

    }


    login1(user): Observable<boolean> {
        return this.http.post(this.UrlLogin, user)
          .pipe(
            map(result => {
              localStorage.setItem('access_token', result.data);
              return true;
            })
          );
      }



}
