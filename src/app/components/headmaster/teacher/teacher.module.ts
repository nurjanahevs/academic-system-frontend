import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { TeacherComponent } from './teacher.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateTeacherComponent } from './create-teacher/create-teacher.component';
import { EditTeacherComponent } from './edit-teacher/edit-teacher.component';
import { AngularMaterialModule } from 'src/app/angular-material.module';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';


@NgModule({
  declarations: [
    TeacherComponent,
    CreateTeacherComponent,
    EditTeacherComponent,
    HeaderComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    SweetAlert2Module
  ]
})
export class TeacherModule { }
