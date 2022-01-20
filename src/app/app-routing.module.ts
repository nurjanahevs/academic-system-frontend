import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddscoreComponent } from './components/addscore/addscore.component';
import { ClassdetailComponent } from './components/classdetail/classdetail.component';
import { ClassesComponent } from './components/classes/classes.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ScoreComponent } from './components/score/score.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'score', component: ScoreComponent },
      { path: 'class', component: ClassesComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'addscore', component: AddscoreComponent },
      { path: 'classdetail', component: ClassdetailComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
