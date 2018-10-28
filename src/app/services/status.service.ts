import { Injectable } from '@angular/core';


export class User{
    constructor(
    public   usuario : string ,
    public   nombre : string ,
    public   email : string ){}
    
}

@Injectable()
export class ServiceStatus {

    public connect = false;
    public admin = false;
    public expires = new Date();
    public user = null;
    public msgErrorStr ='';
    public HiddenmsgErrorBool =true;
    public ViewUser = '';

    public msgError(msg){
        this.msgErrorStr = msg;
        this.HiddenmsgErrorBool = false;

    }

    public IsConnect(){
        return this.connect;
    }

    public IsAdmin(){
        return this.admin;
    }


    public TestConnect(){
        this.connect=!this.connect;
    }

    public setStatus(Secure){
        localStorage.setItem('Secure', JSON.stringify(Secure));
        this.connect = true;
        this.admin = Secure.user.esAdmin;
        this.expires= new Date(Secure.expires);
        this.user = Secure.user;

        this.ViewUser = Secure.user.email;
        
    }

    public logout(){
        localStorage.removeItem('Secure');
        this.connect = false;
        this.admin = false;
        this.expires= null;
        this.user = null;
        this.ViewUser ='';
    }

    public reload(){

        if(localStorage.getItem('Secure')){
            var Secure = JSON.parse(localStorage.getItem('Secure'));        
            //comprobar si ha expirado antes
            
            if(Secure.expires >= Date.now() )   {

                  
                this.setStatus(Secure); 
            }
        

        }
        
    }



    constructor() { }

    
}