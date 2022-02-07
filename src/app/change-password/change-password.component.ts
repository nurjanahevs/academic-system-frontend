import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { newPassword } from '../interface/IPassword';
import { ManagePasswordService } from '../_services/manage-password.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css'],
})
export class ChangePasswordComponent implements OnInit {
  changePasswordForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private managePasswordService: ManagePasswordService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.changePasswordFormInit();
  }

  public changePasswordFormInit() {
    this.changePasswordForm = this.formBuilder.group({
      role: ['', Validators.required],
      email: ['', Validators.required],
      code: ['', Validators.required],
      password: ['', Validators.required],
    });
    console.log(this.changePasswordForm);
  }

  get formChangePasswordControl() {
    return this.changePasswordForm.controls;
  }

  public onConfirm() {
    const newPass: newPassword = {
      role: this.formChangePasswordControl['role'].value,
      email: this.formChangePasswordControl['email'].value,
      code: this.formChangePasswordControl['code'].value,
      password: this.formChangePasswordControl['password'].value,
    };
    this.managePasswordService
      .changeNewPassword(
        newPass.role,
        newPass.email,
        newPass.code,
        newPass.password
      )
      .subscribe(
        (res) => {
          Swal.fire({
            icon: 'success',
            title: 'Success to Change a New Password',
            text: 'Please Login Again',
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
