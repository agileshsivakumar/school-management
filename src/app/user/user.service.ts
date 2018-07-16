import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from './user.model';

@Injectable()
export class UserService {
  private _isUserLoggedIn = false;
  private _userName = '';
  constructor(private http: HttpClient) {}

  public setUserDetails(userName: string) {
    if (userName) {
      this._isUserLoggedIn = true;
      this._userName = userName;
    }
  }

  /**
   * getUserDetails
   */
  public getIsUserLoggedIn() {
    return this._isUserLoggedIn;
  }

  /**
   * getUserName
   */
  public getUserName() {
    return this._userName;
  }

  public authenticateUser() {
    return this.http.get('assets/login.csv', { responseType: 'text' });
  }

  private handleError(error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }
}
