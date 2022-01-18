import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeachersidebarComponent } from './components/teachersidebar/teachersidebar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ScoreComponent } from './components/score/score.component';
import { ClassesComponent } from './components/classes/classes.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HeaderComponent } from './components/header/header.component';
import { AddscoreComponent } from './components/addscore/addscore.component';
import { ClassdetailComponent } from './components/classdetail/classdetail.component';

@NgModule({
  declarations: [
    AppComponent,
    TeachersidebarComponent,
    DashboardComponent,
    ScoreComponent,
    ClassesComponent,
    ProfileComponent,
    HeaderComponent,
    AddscoreComponent,
    ClassdetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
