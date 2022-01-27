import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeadmasterRoutingModule } from './headmaster-routing.module';
import { HeadmasterComponent } from './headmaster.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { StudentRaportComponent } from './student/raport/student-raport.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';


@NgModule({
  declarations: [
    HeadmasterComponent,
    FooterComponent,
    HeaderComponent,
    StudentRaportComponent,
    DashboardComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    HeadmasterRoutingModule
  ],
  exports: [
    SidebarComponent
  ]
})
export class HeadmasterModule { }
