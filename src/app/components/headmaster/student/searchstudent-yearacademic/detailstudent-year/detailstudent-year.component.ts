import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentSpesific } from 'src/app/interface/IStudent';
import { HeadmasterService } from '../../../headmaster.service';

@Component({
  selector: 'app-detailstudent-year',
  templateUrl: './detailstudent-year.component.html',
  styleUrls: ['./detailstudent-year.component.css'],
})
export class DetailstudentYearComponent implements OnInit {
  idStudent: any;
  students!: StudentSpesific;
  spinner = false;

  constructor(
    private headmasterService: HeadmasterService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.idStudent = params['id'];
    });
    this._spinner();
    this.getSpesificStudent();
  }

  public _spinner() {
    setTimeout(() => {
      this.spinner = true;
    }, 2000);
  }

  public getSpesificStudent() {
    this.headmasterService
      .getSpesificStudent(this.idStudent)
      .subscribe((res: any) => {
        this.students = res.body;
      });
  }

  public onBack() {
    this.router.navigate(['/headmaster/student/searchBy/academicYear']);
  }
}
