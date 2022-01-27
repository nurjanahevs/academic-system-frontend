import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeacherData } from 'src/app/interface/ITeacher';
import { ClassesService } from 'src/app/_services/classes.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css'],
})
export class ClassesComponent implements OnInit {
  classes: TeacherData[] = [];
  getClass: any = {};
  getCoursess: any = {};
  idteacher: any;
  isLoggedIn = false;

  constructor(
    private classService: ClassesService,
    private tokenStorage: TokenStorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getClassesTeacher();
    this.onAuth();
  }

  onAuth() {
    this.isLoggedIn = !!this.tokenStorage.getToken();
    if (!this.isLoggedIn) {
      this.router.navigate(['/login']);
    }
  }

  getClassesTeacher() {
    this.idteacher = this.tokenStorage.getUser();
    this.classService.getClasses(this.idteacher.user.id).subscribe((res: any) => {
      this.classes = res;
      console.log(res)
      this.getclass(res.body.teachClass[0]);
      this.getCourses(res.body.course);
    });
  }

  getclass(id: string){
    this.classService.getclass(id).subscribe((res: any)=> {
      this.getClass = res.body;
    })
  }

  getCourses(id: string){
    this.classService.getCourse(id).subscribe((res) => {
      this.getCoursess = res.body;
    })
  }

}
