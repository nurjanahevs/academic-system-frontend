import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faEraser } from '@fortawesome/free-solid-svg-icons';
import { StudentData } from 'src/app/interface/IStudent';
import { IYearAcademic } from 'src/app/interface/IYearAcademic';
import Swal from 'sweetalert2';
import { HeadmasterService } from '../../headmaster.service';

@Component({
  selector: 'app-searchstudent-yearacademic',
  templateUrl: './searchstudent-yearacademic.component.html',
  styleUrls: ['./searchstudent-yearacademic.component.css'],
})
export class SearchstudentYearacademicComponent implements OnInit {
  faSearch = faSearch;
  faEdit = faEdit;
  faEraser = faEraser;
  searchingForm!: FormGroup;
  yearAcademic = new FormControl('');
  years!: IYearAcademic[];
  students!: StudentData[];
  selectedStudent: any;

  constructor(
    private headmasterService: HeadmasterService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getYearAcademic();
  }

  public getYearAcademic() {
    this.headmasterService.getYearAcademic().subscribe((res: any) => {
      this.years = res.body;
    });
  }

  public onBack() {
    this.router.navigate(['/headmaster/student']);
  }

  public onSearch() {
    const year: IYearAcademic = {
      yearAcademic: this.yearAcademic.value,
    };
    this.headmasterService
      .studentByYear(year.yearAcademic)
      .subscribe((res: any) => {
        if (res.body.length === 0) {
          Swal.fire({
            icon: 'error',
            title: 'Oops... Sory',
            text: 'Student Data In This Year is Null :(',
            showConfirmButton: false,
            timer: 3000,
          });
        } else {
          this.students = res.body;
        }
      });
  }

  public onDetail(students: StudentData) {
    this.selectedStudent = students._id;
    this.router.navigate([
      '/headmaster/student/searchBy/academicYear/' + this.selectedStudent,
    ]);
  }
}
