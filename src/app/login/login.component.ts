import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { AuthData } from '../interface/IAuth';
import { AuthServiceService } from '../_services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  userIsAuthenticated = false;
  login!: FormGroup;
  errorEmail = false;
  errorPassword = false;
  errorRole = false;
  loginData: AuthData[] = [];
  spinner = false;

  constructor(
    private authService: AuthServiceService,
    private loginBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.loadingSpinner();
    this.loginFormInit();
    // this.authStatusListen();
  }

  get loginForm() {
    return this.login.controls;
  }

  protected loginFormInit() {
    this.login = this.loginBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      role: ['', Validators.required],
    });
  }

  public onLogin() {
    if (
      this.loginForm['email'].invalid === true &&
      this.loginForm['password'].invalid === true &&
      this.loginForm['role'].invalid === true
    ) {
      this.errorEmail = true;
      this.errorPassword = true;
      this.errorRole = true;
      setTimeout(() => {
        this.errorEmail = false;
        this.errorPassword = false;
        this.errorRole = false;
      }, 3000);
    } else if (this.loginForm['email'].invalid === true) {
      this.errorEmail = true;
      setTimeout(() => {
        this.errorEmail = false;
      }, 3000);
    } else if (this.loginForm['password'].invalid === true) {
      this.errorPassword = true;
      setTimeout(() => {
        this.errorPassword = false;
      }, 3000);
    } else if (this.loginForm['role'].invalid === true) {
      this.errorRole = true;
      setTimeout(() => {
        this.errorRole = false;
      }, 3000);
    } else {
      const user: AuthData = {
        email: this.loginForm['email'].value,
        password: this.loginForm['password'].value,
        role: this.loginForm['role'].value,
      };
      this.authService.login(user.email, user.password, user.role);
    }
  }

  // authStatusListen() {
  //   this.authService.getAuthStatusListener().subscribe((isAuthenticated) => {
  //     this.userIsAuthenticated = isAuthenticated;
  //   });
  // }

  loadingSpinner() {
    setTimeout(() => {
      this.spinner = true;
    }, 1500);
  }
}
