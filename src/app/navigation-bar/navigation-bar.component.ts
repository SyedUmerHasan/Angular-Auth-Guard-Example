import { AuthService } from './../service/auth.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {
  @Input() public title: string;

  login = false;
  constructor(private authService: AuthService, private router: Router) {
    this.login = this.authService.isLoggedIn;
  }

  ngOnInit() {
    this.login = this.authService.isLoggedIn;
  }
  logout() {
    this.authService.logout();
    this.authService.isLoggedIn = false;
    this.router.navigateByUrl('/signin');
  }

}
