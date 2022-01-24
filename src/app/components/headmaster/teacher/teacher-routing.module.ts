import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTeacherComponent } from './create-teacher/create-teacher.component';
import { EditTeacherComponent } from './edit-teacher/edit-teacher.component';
import { TeacherComponent } from './teacher.component';

const routes: Routes = [
  { path: '', component: TeacherComponent },
  { path: 'create', component: CreateTeacherComponent },
  { path: 'edit', component: EditTeacherComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeacherRoutingModule {}
