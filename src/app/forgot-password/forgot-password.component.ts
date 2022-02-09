import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { IPassword } from '../interface/IPassword';
import { ManagePasswordService } from '../_services/manage-password.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
})
export class ForgotPasswordComponent implements OnInit {
  formPassword!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private managePasswordService: ManagePasswordService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.formPasswordInit();
  }

  public formPasswordInit() {
    this.formPassword = this.formBuilder.group({
      role: ['', Validators.required],
      email: ['', Validators.required],
    });
    console.log(this.formPassword);
  }

  get formPasswordControl() {
    return this.formPassword.controls;
  }

  public onSend() {
    const password: IPassword = {
      role: this.formPasswordControl['role'].value,
      email: this.formPasswordControl['email'].value,
    };
    if (this.formPassword.status === 'INVALID') {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please Fill The Form First!',
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      this.managePasswordService
        .forgotPassword(password.role, password.email)
        .subscribe(
          (res) => {
            Swal.fire({
              icon: 'success',
              title: 'Send Code to Email OTP Success',
              text: 'Check The Email get Code OTP',
              showConfirmButton: true,
              timer: 3000,
            });
            this.router.navigate(['/login']);
          },
          () => {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Something went wrong!',
              showConfirmButton: false,
              timer: 3000,
            });
          }
        );
    }
  }
}
