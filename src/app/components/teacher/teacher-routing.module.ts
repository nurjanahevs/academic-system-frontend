import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddscoreComponent } from './addscore/addscore.component';
import { ClassesComponent } from './classes/classes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { ScoreComponent } from './score/score.component';
import { TeacherComponent } from './teacher.component';

const routes: Routes = [
  { path: '', component: TeacherComponent },
  { path: 'score', component: ScoreComponent },
  { path: 'score/add-score', component: AddscoreComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'class', component: ClassesComponent },
  { path: 'class/class-detail', component: ClassesComponent },
  // { path: 'calendar' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeacherRoutingModule {}
