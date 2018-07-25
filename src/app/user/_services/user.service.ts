import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../_models/user.model';

@Injectable()
export class UserService {
  private _user: User;

  constructor(private http: HttpClient) {
    this._user = new User();
  }

  public setUserDetails(user: User) {
    this._user = user;
  }

  public getIsUserLoggedIn() {
    return this._user.isLoggedIn;
  }

  public authenticateUser(username: string, password: string) {
    return this.http.get('assets/users.json').pipe(
      map((users: User[]) => {
        users.forEach(user => {
          if (user.username === username && user.password === password) {
            user.isLoggedIn = true;
            this.setUserDetails(user);
          }
        });
        return this._user.isLoggedIn;
      })
    );
  }

  public registerUser() {
    /* const file = '/assets/data.json';
    const obj = { name: 'JP' };
    jsonfile.writeFile(file, obj, function(err) {
      console.error(err);
    }); */
  }

  private handleError(error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }
}
