import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
    path: 'teacher',
    loadChildren: () =>
      import('./components/teacher/teacher.module').then(
        (m) => m.TeacherModule
      ),
  },
  {
    path: 'headmaster',
    loadChildren: () =>
      import('./components/headmaster/headmaster.module').then(
        (m) => m.HeadmasterModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
