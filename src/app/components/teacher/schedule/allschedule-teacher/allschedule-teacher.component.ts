import { Component, OnInit } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { EventApi, CalendarOptions } from '@fullcalendar/angular';
import { DialogScheduleComponent } from 'src/app/components/headmaster/schedule/dialog-schedule/dialog-schedule.component';
import { ScheduleService } from 'src/app/_services/schedule.service';

@Component({
  selector: 'app-allschedule-teacher',
  templateUrl: './allschedule-teacher.component.html',
  styleUrls: ['./allschedule-teacher.component.css']
})
export class AllscheduleTeacherComponent implements OnInit {
  events: any[] = [];
  getEvent: any[] = [];
  calendarVisible = true;
  currentEvents: EventApi[] = [];
  calendarOptions!: CalendarOptions;
  selectedSchedule: any;

  constructor(
    private scheduleService: ScheduleService,
    public dialog: MatDialog,
    private router: Router
  ) {}

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.events.push(`${type}: ${event.value}`);
  }

  ngOnInit(): void {
    this._eventInit();
    this.calendarOptions = { initialView: 'timeGridWeek' };
    setTimeout(() => {
      this.calendarOptions = {
        headerToolbar: {
          left: 'title',
          center: '',
          right: 'prev,next,today',
        },
        initialView: 'timeGridWeek',
        events: this.events[0],
        weekends: true,
        editable: false,
        selectable: false,
        selectMirror: true,
        dayMaxEvents: true,
        // select: this.handleDateSelect.bind(this),
        eventClick: this.handleEventClick.bind(this),
        // eventsSet: this.handleEvents.bind(this),
      };
    }, 1500);
  }

  private _eventInit() {
    this.scheduleService.getEvent().subscribe((events) => {
      this.events.push(events);
    });
  }

  public handleEventClick(event: any) {
    console.log(event.event._def.extendedProps._id)
    this.selectedSchedule = event.event._def.extendedProps._id;
    this.router.navigate(['/teacher/schedule/detailSchedule/' + this.selectedSchedule]);
    // this.dialog.open(DetailScheduleComponent, {
    //   width: '500px',
    //   height: '500px',
    // });
  }

  openDialog() {
    this.dialog.open(DialogScheduleComponent, {
      width: '400px',
      height: '520px',
    });
  }

}