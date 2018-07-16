import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public userName = '';
  public password = '';
  constructor(public userService: UserService, private router: Router) {}

  public singIn() {
    if (this.userName === 'admin' && this.password === 'admin') {
      this.userService.setUserDetails(this.userName);
      this.router.navigate(['dashboard']);
    }
  }

  public navigateToRegister() {
    this.router.navigate(['register']);
  }
}
