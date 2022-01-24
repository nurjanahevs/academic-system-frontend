import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClassRoutingModule } from './class-routing.module';
import { ClassComponent } from './class.component';
import { CreateClassComponent } from './create-class/create-class.component';
import { EditClassComponent } from './edit-class/edit-class.component';
import { AngularMaterialModule } from 'src/app/angular-material.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';


@NgModule({
  declarations: [
    ClassComponent,
    CreateClassComponent,
    EditClassComponent,
    HeaderComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    ClassRoutingModule,
    AngularMaterialModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ]
})
export class ClassModule { }
