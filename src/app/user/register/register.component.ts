import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registrationFormGroup: FormGroup;
  isRegistrationFormLoading = false;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.createRegistrationForm();
  }

  createRegistrationForm() {
    this.registrationFormGroup = this.formBuilder.group({
      firstName: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      lastName: new FormControl('', Validators.required),
      username: new FormControl('', Validators.required),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ])
    });
  }

  get firstName() {
    return this.registrationFormGroup.get('firstName');
  }
  get lastName() {
    return this.registrationFormGroup.get('lastName');
  }
  get username() {
    return this.registrationFormGroup.get('username');
  }
  get password() {
    return this.registrationFormGroup.get('password');
  }

  onRegistrationFormSubmit() {
    if (this.registrationFormGroup.invalid) {
      return;
    }
    this.isRegistrationFormLoading = true;
  }

  /* onSubmit() {

    this.userService
      .register(this.registrationFormGroup.value)
      .pipe(first())
      .subscribe(
        data => {
          this.alertService.success('Registration successful', true);
          this.router.navigate(['/login']);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        }
      );
  } */
}
