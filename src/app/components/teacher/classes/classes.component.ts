import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Teacher } from 'src/app/_models/Teacher';
import { ClassesService } from 'src/app/_services/classes.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css'],
})
export class ClassesComponent implements OnInit {
  classes: Teacher = {};
  getClass: any;
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
      this.router.navigate(['login']);
    }
  }

  getClassesTeacher() {
    this.getClass = JSON.parse(this.tokenStorage.getClassTeacher()!);
    this.classService.getClasses(this.getClass).subscribe((res) => {
      this.classes = res;
      console.log(res);
    });
  }
}
