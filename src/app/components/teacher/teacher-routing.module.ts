import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddscoreComponent } from './addscore/addscore.component';
import { ClassesComponent } from './classes/classes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AllscoreStudentComponent } from './new-score/allscore-student/allscore-student.component';
import { DetailscoreStudentComponent } from './new-score/detailscore-student/detailscore-student.component';
import { ManageScoreComponent } from './new-score/manage-score/manage-score.component';
import { NewScoreComponent } from './new-score/new-score.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { ScoreComponent } from './score/score.component';
import { TeacherComponent } from './teacher.component';

const routes: Routes = [
  { path: '', redirectTo: '/teacher/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'score', component: ScoreComponent },
  { path: 'score/add-score', component: AddscoreComponent },
  { path: 'class', component: ClassesComponent },
  { path: 'class/class-detail', component: ClassesComponent },
  { path: 'schedule', component: ScheduleComponent },
  {
    path: 'newScore',
    component: NewScoreComponent,
    children: [
      {
        path: '',
        redirectTo: '/teacher/newScore/allScore-student',
        pathMatch: 'full',
      },
      { path: 'allScore-student', component: AllscoreStudentComponent },
      {
        path: 'detailScore-student/:id',
        component: DetailscoreStudentComponent,
      },
      { path: 'detailScore-student/:id/:id', component: ManageScoreComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeacherRoutingModule {}
