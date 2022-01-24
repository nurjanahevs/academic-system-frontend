import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeadmasterComponent } from './headmaster.component';

const routes: Routes = [
  { path: '', component: HeadmasterComponent },
  {
    path: 'teacher',
    loadChildren: () =>
      import('./teacher/teacher.module').then(
        (m) => m.TeacherModule
      ),
  },
  {
    path: 'class',
    loadChildren: () =>
      import('./class/class.module').then(
        (m) => m.ClassModule
      ),
  },
  {
    path: 'course',
    loadChildren: () =>
      import('./course/course.module').then(
        (m) => m.CourseModule
      ),
  },
  {
    path: 'student',
    loadChildren: () =>
      import('./student/student.module').then(
        (m) => m.StudentModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeadmasterRoutingModule { }
