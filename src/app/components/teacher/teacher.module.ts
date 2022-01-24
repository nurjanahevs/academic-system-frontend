import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { TeacherComponent } from './teacher.component';
import { AddscoreComponent } from './addscore/addscore.component';
import { ScoreComponent } from './score/score.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from 'src/app/angular-material.module';
import { TeachersidebarComponent } from './teachersidebar/teachersidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { ClassesComponent } from './classes/classes.component';
import { ClassdetailComponent } from './classdetail/classdetail.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    TeacherComponent,
    ScoreComponent,
    AddscoreComponent,
    TeachersidebarComponent,
    DashboardComponent,
    ProfileComponent,
    ClassesComponent,
    ClassdetailComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AngularMaterialModule
  ]
})
export class TeacherModule { }
