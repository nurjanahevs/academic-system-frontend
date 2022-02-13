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
  private isAuthenticated = false;
  errorMessage = '';
  private token: string | null = '';
  private authStatusListener = new Subject<boolean>();
  private userId!: string | null;

  constructor(
    private http: HttpClient,
    private tokenStorage: TokenStorageService,
    private router: Router
  ) {}

  getToken(): any {
    return this.token;
  }

  getUserId() {
    return this.userId;
  }

  getIsAuth() {
    return this.isAuthenticated;
  }

  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }

  login(email: string, password: string, role: string) {
    const authData: AuthData = { email, password, role };
    return this.http
      .post<{ token: string; user: string }>(AUTH_API + 'login', authData)
      .subscribe(
        (res: any) => {
          console.log(res)
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Login Success',
            showConfirmButton: false,
            timer: 2000,
          });
          const token = res.token;
          const userId = res.user.id;
          this.token = token;
          this.isAuthenticated = true;
          this.tokenStorage.saveToken(token);
          this.tokenStorage.saveUser(res);
          this.tokenStorage.setIdUser(userId);
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
    this.token = null;
    this.userId = null;
    this.isAuthenticated = false;
    this.tokenStorage.deleteToken();
    this.tokenStorage.clear();
    this.router.navigate(['']);
  }
}
