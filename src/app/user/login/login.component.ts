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
    this.userService.authenticateUser().subscribe(data => {
      console.log(data);
      const users: any[] = this.csvToJSON(data);
      users.forEach(user => {
        if (user.Name === this.userName && user.Password === this.password) {
          this.userService.setUserDetails(this.userName);
          this.router.navigate(['dashboard']);
        }
      });
    });
  }

  private csvToJSON(csv) {
    const lines = csv.split('\n');
    const result = [];
    const headers = lines[0].split(',');
    for (let i = 1; i < lines.length - 1; i++) {
      const obj = {};
      const currentline = lines[i].split(',');
      for (let j = 0; j < headers.length; j++) {
        obj[headers[j]] = currentline[j];
      }
      result.push(obj);
    }
    return result;
  }

  public navigateToRegister() {
    this.router.navigate(['register']);
  }
}
