import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css']
})
export class CreateCourseComponent implements OnInit {
  createFormCourse!: FormGroup;
  spinner = false;

  constructor(private formCourse: FormBuilder) {}

  ngOnInit(): void {
    this._spinner();
    this.createCourseFormInit();
  }

  private createCourseFormInit() {
    this.createFormCourse = this.formCourse.group({
      course: ['', Validators.required],
      code: ['', Validators.required],
      Teacher: ['', Validators.required],
    });
  }

  public _spinner() {
    setTimeout(() => {
      this.spinner = true;
    }, 2000);
  }

  public onSubmit() {
    console.log(this.createFormCourse);
  }

  public onCancel() {}
}
