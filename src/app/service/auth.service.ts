import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;
  constructor( private router: Router ) {
    this.checkLogin();
  }

  checkLogin() {
    const p = localStorage.getItem('token');
    console.log('Check Login');
    if (p === null || p === undefined || p === '' ) {
      console.log('token is null');
      this.isLoggedIn = false;
    } else {
      this.isLoggedIn = true;
      console.log('Already Logged in');
    }
    this.router.navigateByUrl('/home');
  }
  logout() {
    localStorage.setItem('token', '');
    this.isLoggedIn = false;
    console.log('Logout');

  }
}
