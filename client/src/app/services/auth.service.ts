import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from '../../environment/environment';
import { Observable } from 'rxjs';
import { User } from '../types/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user!: User;

  constructor(private httpClient: HttpClient) {}

  loginFn(email: string, password: string): Observable<User> {
    return this.httpClient.post<User>(env.SERVER_URL + '/api/users/login', {
      email,
      password,
    });
  }

  setUserData(data: User) {
    this.user = data;
    localStorage.setItem('user', JSON.stringify(data));
  }
}
