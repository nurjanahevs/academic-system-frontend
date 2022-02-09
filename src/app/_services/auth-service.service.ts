import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { AuthData } from '../interface/IAuth';
import { TokenStorageService } from './token-storage.service';

const AUTH_API = environment.API_URL + 'api/';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  isLoggedIn = false;
  errorMessage = '';
  token: string | null = '';
  // authStatusListener = new Subject<boolean>();
  constructor(
    private http: HttpClient,
    private tokenStorage: TokenStorageService,
    private router: Router
  ) {}

  getToken(): any {
    return this.token;
  }

  getIsAuth() {
    return this.isLoggedIn;
  }

  // getAuthStatusListener() {
  //   return this.authStatusListener.asObservable();
  // }

  login(email: string, password: string, role: string) {
    const authData: AuthData = { email, password, role };
    return this.http
      .post<{ token: string; user: string }>(AUTH_API + 'login', authData)
      .subscribe(
        (res: any) => {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Login Success',
            showConfirmButton: false,
            timer: 2000,
          });
          const token = res.token;
          this.token = token;
          this.isLoggedIn = true;
          this.tokenStorage.saveToken(token);
          this.tokenStorage.saveUser(res);
          console.log(res);
          if (res.user.role === 'Headmaster') {
            this.router.navigate(['/headmaster']);
          } else if (res.user.role === 'Teacher') {
            this.router.navigate(['/teacher']);
          } else if (res.user.role === 'student') {
            this.router.navigate(['/student']);
          } else if (res.user.role === 'parent') {
            this.router.navigate(['/parent']);
          }
        },
        (err) => {
          this.errorMessage = err.error.message;
          Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Wrong Account!',
            text: 'Please Check Your Account and Login Again',
            showConfirmButton: false,
            timer: 2500,
          });
        }
      );
  }

  logout() {
    this.isLoggedIn = false;
    this.tokenStorage.deleteToken();
    this.router.navigate(['']);
  }
}
