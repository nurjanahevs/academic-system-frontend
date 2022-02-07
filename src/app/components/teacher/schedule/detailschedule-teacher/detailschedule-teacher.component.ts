import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { scheduleSpesific } from 'src/app/interface/ISchedule';
import { ScheduleService } from 'src/app/_services/schedule.service';

@Component({
  selector: 'app-detailschedule-teacher',
  templateUrl: './detailschedule-teacher.component.html',
  styleUrls: ['./detailschedule-teacher.component.css'],
})
export class DetailscheduleTeacherComponent implements OnInit {
  spinner = false;
  idCalendar: any;
  schedules!: scheduleSpesific;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private scheduleService: ScheduleService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.idCalendar = params['id'];
    });
    this._spinner();
    this.spesificSchedule();
  }

  public _spinner() {
    setTimeout(() => {
      this.spinner = true;
    }, 2000);
  }

  public spesificSchedule() {
    this.scheduleService
      .getSpecScheduleTeacher(this.idCalendar)
      .subscribe((res: any) => {
        this.schedules = res.body;
      });
  }

  public onBack() {
    this.router.navigate(['/teacher/schedule']);
  }
}
