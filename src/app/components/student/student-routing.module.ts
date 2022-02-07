import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReportComponent } from './report/report.component';
import { AllstudentScheduleComponent } from './schedule/allstudent-schedule/allstudent-schedule.component';
import { DetailstudentScheduleComponent } from './schedule/detailstudent-schedule/detailstudent-schedule.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { StudentComponent } from './student.component';

const routes: Routes = [
  { path: '', redirectTo: '/student/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  {
    path: 'schedule',
    component: ScheduleComponent,
    children: [
      {
        path: '',
        redirectTo: '/student/schedule/allSchedule',
        pathMatch: 'full',
      },
      { path: 'allSchedule', component: AllstudentScheduleComponent },
      { path: 'detailSchedule/:id', component: DetailstudentScheduleComponent },
    ],
  },
  { path: 'report', component: ReportComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentRoutingModule {}
