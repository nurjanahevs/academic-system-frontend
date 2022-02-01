import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeroomData, HomeStudent } from 'src/app/interface/IHomeroom';
import { HeadmasterService } from '../../../headmaster.service';

@Component({
  selector: 'app-score-homeroom',
  templateUrl: './score-homeroom.component.html',
  styleUrls: ['./score-homeroom.component.css'],
})
export class ScoreHomeroomComponent implements OnInit {
  idStudent: any;
  studentScore!: HomeStudent;

  constructor(
    private router: Router,
    private headmasterService: HeadmasterService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.idStudent = params['id'];
    });
    this.getStudentScore();
  }

  public getStudentScore() {
    this.headmasterService.getScoreByHomeroom(this.idStudent).subscribe((res: any) => {
      this.studentScore = res.body;
    })
  }

  public onBack() {
    this.location.back();
  }
}
