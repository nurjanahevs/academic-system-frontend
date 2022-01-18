import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddscoreComponent } from './components/addscore/addscore.component';
import { ClassdetailComponent } from './components/classdetail/classdetail.component';
import { ClassesComponent } from './components/classes/classes.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ScoreComponent } from './components/score/score.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'score', component: ScoreComponent },
  { path: 'class', component: ClassesComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'addscore', component: AddscoreComponent },
  { path: 'classdetail', component: ClassdetailComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
