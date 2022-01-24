import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseRoutingModule } from './course-routing.module';
import { CourseComponent } from './course.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from 'src/app/angular-material.module';
import { CreateCourseComponent } from './create-course/create-course.component';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';


@NgModule({
  declarations: [
    CourseComponent,
    CreateCourseComponent,
    EditCourseComponent,
    HeaderComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    CourseRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    AngularMaterialModule
  ]
})
export class CourseModule { }
