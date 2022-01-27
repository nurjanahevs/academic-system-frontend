import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './_services/auth.guard';

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
    path: 'teacher',
    loadChildren: () =>
      import('./components/teacher/teacher.module').then(
        (m) => m.TeacherModule
      ),
    // canActivate: [AuthGuard],
  },
  {
    path: 'headmaster',
    loadChildren: () =>
      import('./components/headmaster/headmaster.module').then(
        (m) => m.HeadmasterModule
      ),
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
