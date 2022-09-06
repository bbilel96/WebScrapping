import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  users = ['omar', 'hammadi', 'mohamed'];
  constructor() { }
  login(admin: string, password: string): boolean{
    const found = this.users.find(value => admin == value);
    if (found != undefined){
      if (password == 'steamous1948*'){
        return true;
      }
    }
    return false;
  }
  isLogin(): boolean{
    return true;
  }
}
