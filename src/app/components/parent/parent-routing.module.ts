import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentDashboardComponent } from './parent-dashboard/parent-dashboard.component';
import { ParentRaportComponent } from './parent-raport/parent-raport.component';
import { AllscheduleParentComponent } from './parent-schedule/allschedule-parent/allschedule-parent.component';
import { DetailscheduleParentComponent } from './parent-schedule/detailschedule-parent/detailschedule-parent.component';
import { ParentScheduleComponent } from './parent-schedule/parent-schedule.component';
import { ParentStudentComponent } from './parent-student/parent-student.component';
import { StudentprofileParentComponent } from './parent-student/studentprofile-parent/studentprofile-parent.component';
import { ParentComponent } from './parent.component';

const routes: Routes = [
  { path: '', redirectTo: '/parent/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: ParentDashboardComponent },
  {
    path: 'profilStudent',
    component: ParentStudentComponent,
    children: [
      {
        path: '',
        redirectTo: '/parent/profilStudent/student',
        pathMatch: 'full',
      },
      { path: 'student', component: StudentprofileParentComponent },
    ],
  },
  {
    path: 'schedule',
    component: ParentScheduleComponent,
    children: [
      {
        path: '',
        redirectTo: '/parent/schedule/allSchedule',
        pathMatch: 'full',
      },
      { path: 'allSchedule', component: AllscheduleParentComponent },
      { path: 'detailSchedule/:id', component: DetailscheduleParentComponent },
    ],
  },
  { path: 'raportStudent', component: ParentRaportComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParentRoutingModule {}
