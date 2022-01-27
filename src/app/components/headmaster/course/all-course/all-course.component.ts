import { Component, OnInit } from '@angular/core';
import { faEdit, faEraser, faSearch } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-all-course',
  templateUrl: './all-course.component.html',
  styleUrls: ['./all-course.component.css']
})
export class AllCourseComponent implements OnInit {
  faSearch = faSearch;
  faEdit = faEdit;
  faEraser = faEraser;

  constructor() { }

  ngOnInit(): void {
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
