import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  isAuth: boolean;
  
  login(): void {
    setTimeout(() => {
      this.isAuth = true;
    }, 500);
  }
  logout(): void {
    this.isAuth = false;
  }
  constructor() {
    this.isAuth = false;
  }
}
