import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuth: boolean;

  login(): void {
    setTimeout(() => {
      this.isAuth = true;
      this.router.navigate(['/']);
    }, 500);
  }
  logout(): void {
    this.isAuth = false;
    this.router.navigate(['/login']);
  }
  constructor(private router: Router) {
    this.isAuth = true;
  }
}
