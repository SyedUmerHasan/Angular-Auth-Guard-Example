import { AuthService } from './../../service/auth.service';
import { JWTapiService } from './../../WebApi/JWT/jwtapi.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  username = '';
  password = '';
  smartphone: any = [];
  login = false;
  loginMessage = '';

  constructor(private api: JWTapiService , private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
  }

  submitdata() {
    console.log('username = ' + this.username);
    console.log('password = ' + this.password);
    if (this.loginMessage !== 'Welcome user') {
      this.api.getLoginCredentials()
      .subscribe(data => {
        localStorage.setItem('token', JSON.stringify(data));
      });
      this.loginMessage = 'Welcome user';
      this.authService.isLoggedIn = true;
      this.router.navigateByUrl('/home');
    }
  }



}
