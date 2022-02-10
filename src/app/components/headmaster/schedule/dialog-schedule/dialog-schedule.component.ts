import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
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
  getCalendar: scheduleSpesific[] = [];
  errorSameTitile = false;
  errorFill = false;
  constructor(
    private formBuilder: FormBuilder,
    private headmasterService: HeadmasterService,
    private dialogRef: MatDialogRef<DialogScheduleComponent>
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
    console.log(this.dialogFormSchedule);
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
      const arr = this.getCalendar;
      console.log(arr);
      for (let key in arr) {
        console.log(arr[key].title);
        // console.log(arr[key].classes);
        // console.log(arr[key].classes._id);
        console.log(arr[key].classes.className);
        console.log(this.formDialogControls['title'].value);
      }
    });
  }

  public setValueSchedule() {
    this.formDialogControls['daysOfWeek'].setValue(null);
    this.formDialogControls['allDay'].setValue(false);
  }

  public onSave() {
    if (
      this.formDialogControls['title'].invalid === true ||
      this.formDialogControls['start'].invalid === true ||
      this.formDialogControls['end'].invalid === true ||
      this.formDialogControls['classes'].invalid === true
    ) {
      this.errorFill = true;
      setTimeout(() => {
        this.errorFill = false;
      }, 3000);
    } else {
      this.headmasterService.getAllSchedule().subscribe((res: any) => {
        this.getCalendar = res.body;
        const arr = this.getCalendar;
        let title = [];
        let classSame = {};
        console.log(arr);
        for (let key in arr) {
          if (
            arr[key].title === this.formDialogControls['title'].value &&
            arr[key].classes.className ===
              this.formDialogControls['classes'].value
          ) {
            title = arr[key].title;
            classSame = arr[key].classes.className;
          }
        }
        console.log(title);
        console.log(classSame);
        if (
          title === this.formDialogControls['title'].value &&
          classSame === this.formDialogControls['classes'].value
        ) {
          console.log('error');
          this.errorSameTitile = true;
          setTimeout(() => {
            this.errorSameTitile = false;
          }, 3000);
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
                  title: 'Success To Add Schedule',
                  showConfirmButton: false,
                  timer: 2000,
                });
              },
              () => {
                Swal.fire({
                  position: 'top-end',
                  icon: 'error',
                  title: 'Form Required to Fill',
                  showConfirmButton: false,
                  timer: 2500,
                });
              }
            );
        }
      });
    }
  }

  public onDialogClose() {
    this.dialogRef.close();
  }
}
