import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllClassComponent } from './class/all-class/all-class.component';
import { ClassComponent } from './class/class.component';
import { CreateClassComponent } from './class/create-class/create-class.component';
import { EditClassComponent } from './class/edit-class/edit-class.component';
import { AllCourseComponent } from './course/all-course/all-course.component';
import { CourseComponent } from './course/course.component';
import { CreateCourseComponent } from './course/create-course/create-course.component';
import { EditCourseComponent } from './course/edit-course/edit-course.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeadmasterComponent } from './headmaster.component';
import { AllStudentComponent } from './student/all-student/all-student.component';
import { CreateStudentComponent } from './student/create-student/create-student.component';
import { EditStudentComponent } from './student/edit-student/edit-student.component';
import { StudentRaportComponent } from './student/raport/student-raport.component';
import { StudentComponent } from './student/student.component';
import { AllTeacherComponent } from './teacher/all-teacher/all-teacher.component';
import { CreateTeacherComponent } from './teacher/create-teacher/create-teacher.component';
import { EditTeacherComponent } from './teacher/edit-teacher/edit-teacher.component';
import { TeacherComponent } from './teacher/teacher.component';

const routes: Routes = [
  { path: '', component: HeadmasterComponent },
  { path: 'dashboard', component: DashboardComponent },
  {
    path: 'teacher',
    component: TeacherComponent,
    children: [
      {
        path: '',
        redirectTo: '/headmaster/teacher/allTeacher',
        pathMatch: 'full',
      },
      { path: 'allTeacher', component: AllTeacherComponent },
      { path: 'create', component: CreateTeacherComponent },
      { path: 'edit', component: EditTeacherComponent },
    ],
  },
  {
    path: 'class',
    component: ClassComponent,
    children: [
      { path: '', redirectTo: '/headmaster/class/allClass', pathMatch: 'full' },
      { path: 'allClass', component: AllClassComponent },
      { path: 'create', component: CreateClassComponent },
      { path: 'edit', component: EditClassComponent },
    ],
  },
  {
    path: 'course',
    component: CourseComponent,
    children: [
      {
        path: '',
        redirectTo: '/headmaster/course/allCourse',
        pathMatch: 'full',
      },
      { path: 'allCourse', component: AllCourseComponent },
      { path: 'create', component: CreateCourseComponent },
      { path: 'edit', component: EditCourseComponent },
    ],
  },
  {
    path: 'student',
    component: StudentComponent,
    children: [
      {
        path: '',
        redirectTo: '/headmaster/student/allStudent',
        pathMatch: 'full',
      },
      { path: 'allStudent', component: AllStudentComponent },
      { path: 'create', component: CreateStudentComponent },
      { path: 'edit', component: EditStudentComponent },
      { path: 'raport', component: StudentRaportComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeadmasterRoutingModule {}
