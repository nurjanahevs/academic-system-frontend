import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const AUTH_API = environment.API_URL + 'api/';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  constructor(private http: HttpClient) {}

  login(email: string, password: string, role: string) {
    return this.http.post<{ token: string; user: object }>(AUTH_API + 'login', {
      email,
      password,
      role,
    });
  }

  register(username: string, email: string, password: string) {
    return this.http.post<{ data: object }>(AUTH_API + 'register', {
      username,
      email,
      password,
    });
  }
}
