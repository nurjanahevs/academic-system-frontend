import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../_services/auth-service.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: any = {
    email: null,
    password: null,
    role: null,
  };

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  token: string | null = '';

  constructor(
    private authService: AuthServiceService,
    private tokenStorage: TokenStorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorage.getToken();
    if (this.isLoggedIn) {
      this.router.navigate(['home/dashboard']);
    }
  }

  selectedvalue(role: any) {
    this.form.role = role.target.value;
  }

  onSubmit(): void {
    const { email, password, role } = this.form;
    console.log(email, password, role);
    this.authService.login(email, password, role).subscribe(
      (res) => {
        const token = res.token;
        this.token = token;
        this.tokenStorage.saveToken(token);
        this.tokenStorage.saveUser(res);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.errorMessage = 'Login Success! wait 2 second...';
        console.log(res);
        setTimeout(() => {
          this.router.navigate(['dashboard']);
        }, 2000);
      },
      (err) => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }
}
