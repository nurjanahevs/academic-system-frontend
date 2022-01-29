import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeadmasterRoutingModule } from './headmaster-routing.module';
import { HeadmasterComponent } from './headmaster.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { StudentRaportComponent } from './student/raport/student-raport.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AngularMaterialModule } from 'src/app/angular-material.module';
import { ClassComponent } from './class/class.component';
import { CreateClassComponent } from './class/create-class/create-class.component';
import { EditClassComponent } from './class/edit-class/edit-class.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AllClassComponent } from './class/all-class/all-class.component';
import { CourseComponent } from './course/course.component';
import { CreateCourseComponent } from './course/create-course/create-course.component';
import { EditCourseComponent } from './course/edit-course/edit-course.component';
import { AllCourseComponent } from './course/all-course/all-course.component';
import { AllTeacherComponent } from './teacher/all-teacher/all-teacher.component';
import { CreateTeacherComponent } from './teacher/create-teacher/create-teacher.component';
import { EditTeacherComponent } from './teacher/edit-teacher/edit-teacher.component';
import { TeacherComponent } from './teacher/teacher.component';
import { AllStudentComponent } from './student/all-student/all-student.component';
import { CreateStudentComponent } from './student/create-student/create-student.component';
import { EditStudentComponent } from './student/edit-student/edit-student.component';
import { StudentComponent } from './student/student.component';


@NgModule({
  declarations: [
    HeadmasterComponent,
    FooterComponent,
    HeaderComponent,
    StudentRaportComponent,
    DashboardComponent,
    SidebarComponent,
    ClassComponent,
    CreateClassComponent,
    EditClassComponent,
    AllClassComponent,
    CourseComponent,
    CreateCourseComponent,
    EditCourseComponent,
    AllCourseComponent,
    AllTeacherComponent,
    CreateTeacherComponent,
    EditTeacherComponent,
    TeacherComponent,
    AllStudentComponent,
    CreateStudentComponent,
    EditStudentComponent,
    StudentRaportComponent,
    StudentComponent
  ],
  imports: [
    CommonModule,
    HeadmasterRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AngularMaterialModule,
    FontAwesomeModule
  ],
  exports: [
    SidebarComponent,
    HeaderComponent
  ]
})
export class HeadmasterModule { }
