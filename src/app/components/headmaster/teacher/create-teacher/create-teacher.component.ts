import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TeacherData } from 'src/app/interface/ITeacher';
import { HeadmasterService } from '../../headmaster.service';

@Component({
  selector: 'app-create-teacher',
  templateUrl: './create-teacher.component.html',
  styleUrls: ['./create-teacher.component.css'],
})
export class CreateTeacherComponent implements OnInit {
  createFormTeacher!: FormGroup;
  createTeacher: TeacherData[] = [];
  spinner = false;
  constructor(
    private formTeacher: FormBuilder,
    private headmasterService: HeadmasterService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this._spinner();
    this.createTeacherFormInit();
  }

  public _spinner() {
    setTimeout(() => {
      this.spinner = true;
    }, 2000);
  }

  private createTeacherFormInit() {
    this.createFormTeacher = this.formTeacher.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      birthDate: ['', Validators.required],
      course: ['', Validators.required],
      teachClass: ['', Validators.required],
    });
    console.log(this.createFormTeacher);
  }

  get teacherForm() {
    return this.createFormTeacher.controls;
  }

  public onSubmit() {
    const teacher: TeacherData = {
      fullName: this.teacherForm['fullName'].value,
      password: this.teacherForm['fullName'].value,
      email: this.teacherForm['email'].value,
      birthDate: this.teacherForm['birthDate'].value,
      course: this.teacherForm['course'].value,
      teachClass: this.teacherForm['teachClass'].value,
    };
    this.spinner = true;
    this.headmasterService
      .createTeacher(
        teacher.fullName,
        teacher.email,
        teacher.birthDate,
        teacher.course,
        teacher.teachClass
      )
      .subscribe(
        () => {
          this.router.navigate(['/headmaster/teacher']);
        },
        () => {},
        () => {
          this.spinner = false;
        }
      );
    console.log(teacher);
  }

  public onCancel() {}
}