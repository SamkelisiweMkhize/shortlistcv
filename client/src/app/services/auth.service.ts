import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from '../../environment/environment';
import { Observable } from 'rxjs';
import { User } from '../types/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: User | null = null;

  constructor(private httpClient: HttpClient, private router: Router) {}

  // login function
  loginFn(email: string, password: string): Observable<User> {
    return this.httpClient.post<User>(env.SERVER_URL + '/api/users/login', {
      email,
      password,
    });
  }

  // register function
  registerFn(email: string, password: string, name: string): Observable<User> {
    return this.httpClient.post<User>(env.SERVER_URL + '/api/users/register', {
      email,
      password,
      name,
    });
  }

  // save user data to local storage
  setUserData(data: User) {
    this.user = data;
    localStorage.setItem('user', JSON.stringify(data));
  }

  getUserData() {
    let user: string | null = localStorage.getItem('user');

    if (user) {
      this.user = JSON.parse(user);
    }
  }

  logout() {
    localStorage.clear()
    this.user = null
    this.router.navigate(['/login'])
  }
}
