import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Classes } from 'src/app/_models/Class';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css'],
})
export class ScoreComponent implements OnInit {
  form: any = {
    academicYear: null,
    semester: null,
    classes: null,
  };
  scores: Classes = {};
  isLoggedIn = false;

  constructor(
    private userService: UserService,
    private tokenStorage: TokenStorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorage.getToken();
    if (!this.isLoggedIn) {
      this.router.navigate(['login']);
    }
  }

  selectedAcademicYear(academicYear: any) {
    this.form.academicYear = academicYear.target.value;
  }

  selectedSemester(semester: any) {
    this.form.semester = semester.target.value;
  }

  selectedClasses(classes: any) {
    this.form.classes = classes.target.value;
  }

  onSubmit(): void {
    const { academicYear, semester, classes } = this.form;
    console.log(academicYear, semester, classes);
    this.userService
      .getScoreClass(academicYear, semester, classes)
      .subscribe((scores) => {
        this.scores = scores;
        console.log(this.scores);
      });
  }

  update(id: string, nama: string): void {
    this.tokenStorage.saveScoreUser(id, nama);
    setTimeout(() => {
      this.router.navigate(['home/addscore']);
    }, 1000);
  }
}
