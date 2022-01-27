import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faEraser } from '@fortawesome/free-solid-svg-icons';
import { StudentClass } from 'src/app/interface/IStudent';
import { HeadmasterService } from '../../headmaster.service';

@Component({
  selector: 'app-all-student',
  templateUrl: './all-student.component.html',
  styleUrls: ['./all-student.component.css']
})
export class AllStudentComponent implements OnInit {
  faSearch = faSearch;
  faEdit = faEdit;
  faEraser = faEraser;
  students: StudentClass[] = [];

  constructor(private headmasterService: HeadmasterService) {}

  ngOnInit(): void {
    this.getStudents();
  }

  getStudents() {
    this.headmasterService.getStudent().subscribe((res: any) => {
      this.students = res.body;
      console.log(this.students);
    });
  }
}
