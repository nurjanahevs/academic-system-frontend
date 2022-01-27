import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentData } from 'src/app/interface/IStudent';
import Swal from 'sweetalert2';
import { HeadmasterService } from '../../headmaster.service';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css'],
})
export class CreateStudentComponent implements OnInit {
  createFormStudent!: FormGroup;
  createStudent: StudentData[] = [];
  spinner = false;

  constructor(
    private formStudent: FormBuilder,
    private headmasterService: HeadmasterService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this._spinner();
    this.createStudentFormInit();
  }

  public _spinner() {
    setTimeout(() => {
      this.spinner = true;
    }, 2000);
  }

  private createStudentFormInit() {
    this.createFormStudent = this.formStudent.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      birthDate: ['', Validators.required],
      classes: ['', Validators.required],
    });
    console.log(this.createFormStudent);
  }

  get studentForm() {
    return this.createFormStudent.controls;
  }

  public onSubmit() {
    const student: StudentData = {
      fullName: this.studentForm['fullName'].value,
      email: this.studentForm['email'].value,
      birthDate: this.studentForm['birthDate'].value,
      classes: this.studentForm['classes'].value,
    };
    this.spinner = true;
    this.headmasterService
      .createStudent(
        student.fullName,
        student.email,
        student.birthDate,
        student.classes
      )
      .subscribe(
        (res) => {
          Swal.fire({
            icon: 'success',
            title: 'Create Student Success',
            text: 'Headmaster to Create Student Successfull',
            showConfirmButton: true,
            timer: 3000,
          });
          this.router.navigate(['/headmaster/student']);
        },
        () => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            showConfirmButton: true,
            timer: 3000,
          });
        },
        () => {
          this.spinner = false;
        }
      );
  }

  public onCancel() {
    this.router.navigate(['/headmaster/student']);
  }
}
