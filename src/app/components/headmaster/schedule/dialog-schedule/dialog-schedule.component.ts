import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClassData } from 'src/app/interface/IClass';
import { Schedule } from 'src/app/interface/ISchedule';
import { HeadmasterService } from '../../headmaster.service';
import { daysOfWeek, endTime, startTime } from './time';

@Component({
  selector: 'app-dialog-schedule',
  templateUrl: './dialog-schedule.component.html',
  styleUrls: ['./dialog-schedule.component.css'],
})
export class DialogScheduleComponent implements OnInit {
  selectedStartTime!: String;
  selectedEndTime!: String;
  selectedClass!: String;
  selectedRepeat!: String;
  startTime: startTime[] = [
    { time: '00:00', value: '00:00' },
    { time: '01:00', value: '01:00' },
    { time: '02:00', value: '02:00' },
    { time: '03:00', value: '03:00' },
    { time: '04:00', value: '04:00' },
    { time: '05:00', value: '05:00' },
    { time: '06:00', value: '06:00' },
    { time: '07:00', value: '07:00' },
    { time: '08:00', value: '08:00' },
    { time: '09:00', value: '09:00' },
    { time: '10:00', value: '10:00' },
    { time: '11:00', value: '11:00' },
    { time: '12:00', value: '12:00' },
    { time: '01:00', value: '01:00' },
    { time: '02:00', value: '02:00' },
    { time: '03:00', value: '03:00' },
    { time: '04:00', value: '04:00' },
    { time: '05:00', value: '05:00' },
    { time: '06:00', value: '06:00' },
    { time: '07:00', value: '07:00' },
    { time: '08:00', value: '08:00' },
    { time: '09:00', value: '09:00' },
    { time: '10:00', value: '10:00' },
    { time: '11:00', value: '11:00' },
    
  ];
  endTime: endTime[] = [
    { time: '00:00', value: '00:00' },
    { time: '01:00', value: '01:00' },
    { time: '02:00', value: '02:00' },
    { time: '03:00', value: '03:00' },
    { time: '04:00', value: '04:00' },
    { time: '05:00', value: '05:00' },
    { time: '06:00', value: '06:00' },
    { time: '07:00', value: '07:00' },
    { time: '08:00', value: '08:00' },
    { time: '09:00', value: '09:00' },
    { time: '10:00', value: '10:00' },
    { time: '11:00', value: '11:00' },
    { time: '12:00', value: '12:00' },
    { time: '01:00', value: '01:00' },
    { time: '02:00', value: '02:00' },
    { time: '03:00', value: '03:00' },
    { time: '04:00', value: '04:00' },
    { time: '05:00', value: '05:00' },
    { time: '06:00', value: '06:00' },
    { time: '07:00', value: '07:00' },
    { time: '08:00', value: '08:00' },
    { time: '09:00', value: '09:00' },
    { time: '10:00', value: '10:00' },
    { time: '11:00', value: '11:00' },
  ];
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

  constructor(
    private formBuilder: FormBuilder,
    private headmasterService: HeadmasterService
  ) {}

  ngOnInit(): void {
    this.formDialogInit();
    this.setValueSchedule();
    this.getClasses();
  }

  public formDialogInit() {
    this.dialogFormSchedule = this.formBuilder.group({
      title: ['', Validators.required],
      start: ['', Validators.required],
      end: ['', Validators.required],
      // endTime: ['', Validators.required],
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

  public setValueSchedule() {
    this.formDialogControls['daysOfWeek'].setValue(null);
    this.formDialogControls['allDay'].setValue(false);
  }

  public onSave() {
    const schedule: Schedule = {
      title: this.formDialogControls['title'].value,
      start: this.formDialogControls['start'].value,
      end: this.formDialogControls['end'].value,
      // endTime: this.formDialogControls['endTime'].value,
      classes: this.formDialogControls['classes'].value,
      daysOfWeek: this.formDialogControls['daysOfWeek'].value,
      allDay: this.formDialogControls['allDay'].value,
    };
    this.headmasterService
      .addNewSchedule(
        schedule.title,
        schedule.start,
        schedule.end,
        // schedule.endTime,
        schedule.classes,
        schedule.daysOfWeek,
        schedule.allDay
      )
      .subscribe((res: any) => {
        console.log(res);
        console.log(this.dialogFormSchedule);
      });
  }
}

// { time: '00:00', value: '00:00' },
// { time: '01:00', value: '01:00' },
// { time: '02:00', value: '02:00' },
// { time: '03:00', value: '03:00' },
// { time: '04:00', value: '04:00' },
// { time: '05:00', value: '05:00' },
// { time: '06:00', value: '06:00' },
// { time: '07:00', value: '07:00' },
// { time: '08:00', value: '08:00' },
// { time: '09:00', value: '09:00' },
// { time: '10:00', value: '10:00' },
// { time: '11:00', value: '11:00' },
// { time: '12:00', value: '12:00' },
// { time: '13:00', value: '13:00' },
// { time: '14:00', value: '14:00' },
// { time: '15:00', value: '15:00' },
// { time: '16:00', value: '16:00' },
// { time: '17:00', value: '17:00' },
// { time: '18:00', value: '18:00' },
// { time: '19:00', value: '19:00' },
// { time: '20:00', value: '20:00' },
// { time: '21:00', value: '21:00' },
// { time: '22:00', value: '22:00' },
// { time: '23:00', value: '23:00' },