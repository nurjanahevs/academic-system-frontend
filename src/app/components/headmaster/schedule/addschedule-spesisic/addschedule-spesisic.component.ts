import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClassData } from 'src/app/interface/IClass';
import { CourseData } from 'src/app/interface/ICourse';
import { TeacherData } from 'src/app/interface/ITeacher';
import { HeadmasterService } from '../../headmaster.service';
import { daysOfWeek } from '../dialog-schedule/time';

@Component({
  selector: 'app-addschedule-spesisic',
  templateUrl: './addschedule-spesisic.component.html',
  styleUrls: ['./addschedule-spesisic.component.css'],
})
export class AddscheduleSpesisicComponent implements OnInit {
  spesificSchedule!: FormGroup;
  class: ClassData[] = [];
  daysOfWeek: daysOfWeek[] = [
    { repeat: '0', value: '' },
    { repeat: '1', value: '1' },
    { repeat: '2', value: '2' },
    { repeat: '3', value: '3' },
    { repeat: '4', value: '4' },
    { repeat: '5', value: '5' },
    { repeat: '6', value: '6' },
    { repeat: '7', value: '7' },
  ];
  getTeacher!: TeacherData[];
  getClass!: ClassData[];
  getCourse!: CourseData[];
  errorSameTitile = false;
  errorSameStart = false;
  errorSameEnd = false;
  errorSameClass = false;

  constructor(
    private formBuilder: FormBuilder,
    private headmasterService: HeadmasterService
  ) {}

  ngOnInit(): void {
    this.spesificScheduleFormInit();
    this.getTeachers();
    this.getClasses();
    this.getCourses();
  }

  public getTeachers() {
    this.headmasterService.getTeacher().subscribe((res: any) => {
      this.getTeacher = res.body;
      console.log(this.getTeacher);
    });
  }

  public getClasses() {
    this.headmasterService.getClass().subscribe((res: any) => {
      this.getClass = res.body;
      console.log(this.getClass);
    });
  }

  public getCourses() {
    this.headmasterService.getCourse().subscribe((res: any) => {
      this.getCourse = res.body;
      console.log(this.getCourse);
    });
  }

  public spesificScheduleFormInit() {
    this.spesificSchedule = this.formBuilder.group({
      teacher: ['', Validators.required],
      course: ['', Validators.required],
      classes: ['', Validators.required],
      start: ['', Validators.required],
      end: ['', Validators.required],
      repeat: ['', Validators.required],
      allDay: ['', Validators.required],
    });
  }

  get spesificScheduleControls() {
    return this.spesificSchedule.controls;
  }
}
