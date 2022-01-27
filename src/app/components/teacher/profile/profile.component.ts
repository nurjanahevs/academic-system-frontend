import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeacherData } from 'src/app/interface/ITeacher';
import { TeacherService } from 'src/app/_services/teacher.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  idTeacher: any;
  teacher: TeacherData[] = [];
  isLoggedIn = false;
  constructor(
    private tokenStorageService: TokenStorageService,
    private teacherService: TeacherService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.onAuth();
    this.getIdTeacher();
  }

  onAuth() {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (!this.isLoggedIn) {
      this.router.navigate(['/login']);
    }
  }

  getIdTeacher() {
    this.idTeacher = this.tokenStorageService.getUser()!;
    
    console.log(this.idTeacher.user.id)
    // this.teacherService
    //   .getTeacher(this.idTeacher)
    //   .subscribe((res: any) => {
    //     this.teacher = res;
      // });
  }
}
