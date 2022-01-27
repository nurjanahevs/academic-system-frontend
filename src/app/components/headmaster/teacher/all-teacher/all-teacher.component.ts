import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faEraser } from '@fortawesome/free-solid-svg-icons';
import { CourseTeacher } from 'src/app/interface/ITeacher';
import Swal from 'sweetalert2';
import { HeadmasterService } from '../../headmaster.service';

@Component({
  selector: 'app-all-teacher',
  templateUrl: './all-teacher.component.html',
  styleUrls: ['./all-teacher.component.css']
})
export class AllTeacherComponent implements OnInit {
  faSearch = faSearch;
  faEdit = faEdit;
  faEraser = faEraser;
  teachers: CourseTeacher[] = [];

  constructor(private headmasterService: HeadmasterService) {}

  ngOnInit(): void {
    this.getTeachers();
  }

  getTeachers() {
    this.headmasterService.getTeacher().subscribe((res: any) => {
      this.teachers = res.body;
    });
  }

  public onError() {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
      showConfirmButton: false,
      timer: 3000,
    });
  }
}
