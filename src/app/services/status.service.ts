import { Injectable } from '@angular/core';




@Injectable()
export class ServiceStatus {

    public connect = false;

    public IsConnect(){
        return this.connect;
    }


    public TestConnect(){
        this.connect=!this.connect;
    }



    constructor() { }

    
}