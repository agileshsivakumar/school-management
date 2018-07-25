import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginFormGroup: FormGroup;
  isLoginFormLoading = false;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.createLoginForm();
  }

  createLoginForm() {
    this.loginFormGroup = this.formBuilder.group({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  get username() {
    return this.loginFormGroup.get('username');
  }
  get password() {
    return this.loginFormGroup.get('password');
  }

  public onLoginFormSubmit() {
    this.userService.registerUser();
    if (this.loginFormGroup.invalid) {
      return;
    }
    this.isLoginFormLoading = true;
    this.userService
      .authenticateUser(this.username.value, this.password.value)
      .subscribe(isAuthenticated => {
        if (isAuthenticated) {
          this.router.navigate(['']);
        }
        this.isLoginFormLoading = false;
      });
  }
}
