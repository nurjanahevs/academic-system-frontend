import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClassData } from 'src/app/interface/IClass';
import { Schedule, scheduleSpesific } from 'src/app/interface/ISchedule';
import Swal from 'sweetalert2';
import { HeadmasterService } from '../../headmaster.service';
import { daysOfWeek } from './time';

@Component({
  selector: 'app-dialog-schedule',
  templateUrl: './dialog-schedule.component.html',
  styleUrls: ['./dialog-schedule.component.css'],
})
export class DialogScheduleComponent implements OnInit {
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
  dialogFormSchedule!: FormGroup;
  getCalendar!: scheduleSpesific[];
  errorSameTitile = false;
  errorSameStart = false;
  errorSameEnd = false;
  errorSameClass = false;

  constructor(
    private formBuilder: FormBuilder,
    private headmasterService: HeadmasterService
  ) {}

  ngOnInit(): void {
    this.formDialogInit();
    this.setValueSchedule();
    this.getClasses();
    this.getValueValidation();
  }

  public formDialogInit() {
    this.dialogFormSchedule = this.formBuilder.group({
      title: ['', Validators.required],
      start: ['', Validators.required],
      end: ['', Validators.required],
      classes: ['', Validators.required],
      daysOfWeek: ['', [Validators.min(0), Validators.max(7)]],
      allDay: [''],
    });
  }

  get formDialogControls() {
    return this.dialogFormSchedule.controls;
  }

  public getClasses() {
    this.headmasterService.getClass().subscribe((res: any) => {
      this.class = res.body;
    });
  }

  public getValueValidation() {
    this.headmasterService.getAllSchedule().subscribe((res: any) => {
      this.getCalendar = res.body;
      console.log(this.getCalendar);
      for (let key in this.getCalendar) {
        console.log(this.getCalendar[key]);
      }
    });
  }

  public setValueSchedule() {
    this.formDialogControls['daysOfWeek'].setValue(null);
    this.formDialogControls['allDay'].setValue(false);
  }

  public onSave() {
    for (let key in this.getCalendar) {
      if (
        this.getCalendar[key].title ===
          this.formDialogControls['title'].value ||
        this.getCalendar[key].classes?.className ===
          this.formDialogControls['classes'].value ||
        this.getCalendar[key].start ===
          this.formDialogControls['start'].value ||
        this.getCalendar[key].end === this.formDialogControls['end'].value
      ) {
        this.errorSameTitile = true;
        setTimeout(() => {
          this.errorSameTitile = false;
        }, 2500);
        // for (let key in this.getCalendar) {
        //   if (
        //     this.getCalendar[key].title ===
        //       this.formDialogControls['title'].value ||
        //     this.getCalendar[key].classes?.className ===
        //       this.formDialogControls['classes'].value ||
        //     this.getCalendar[key].start ===
        //       this.formDialogControls['start'].value ||
        //     this.getCalendar[key].end === this.formDialogControls['end'].value
        //   ) {
        //     this.errorSameTitile = true;
        //     setTimeout(() => {
        //       this.errorSameTitile = false;
        //     }, 2500);
        // if (
        //   this.getCalendar[key].title ===
        //     this.formDialogControls['title'].value &&
        //   this.getCalendar[key].classes.className ===
        //     this.formDialogControls['classes'].value
        // ) {
        //   this.errorSameTitile = true;
        //   setTimeout(() => {
        //     this.errorSameTitile = false;
        //   }, 2500);
      } else {
        const schedule: Schedule = {
          title: this.formDialogControls['title'].value,
          start: this.formDialogControls['start'].value,
          end: this.formDialogControls['end'].value,
          classes: this.formDialogControls['classes'].value,
          daysOfWeek: this.formDialogControls['daysOfWeek'].value,
          allDay: this.formDialogControls['allDay'].value,
        };
        this.headmasterService
          .addNewSchedule(
            schedule.title,
            schedule.start,
            schedule.end,
            schedule.classes,
            schedule.daysOfWeek,
            schedule.allDay
          )
          .subscribe(
            (res: any) => {
              console.log(res);
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Login Success',
                showConfirmButton: false,
                timer: 2000,
              });
            },
            () => {
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
    }
  }
}
