import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor() { }
    login( user:any){
      return new Promise((resolver) => {
        window.localStorage.setItem('token', 'meu-token');
        resolver(true);
      });

    }
  
}
