import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  ValidateUser(username:string,password:string)
  {
    return true;
  }
}
