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
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home.component';
import { HttpClientModule } from '@angular/common/http';

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
    ClassdetailComponent,
    LoginComponent,
    HomeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
