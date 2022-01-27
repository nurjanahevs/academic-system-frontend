import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-class',
  templateUrl: './edit-class.component.html',
  styleUrls: ['./edit-class.component.css']
})
export class EditClassComponent implements OnInit {
  public spinner = false;
  public updateYearAcademic = false;
  public updateNameClass = false;
  public updateHomeTeacher = false;
  public updateAll = true;
  constructor() {}

  ngOnInit(): void {
    this._spinner();
  }

  public _spinner() {
    setTimeout(() => {
      this.spinner = true;
    }, 2000);
  }

  public onupdateYearAcademic() {
    this.updateYearAcademic = this.updateYearAcademic === false ? true : false;
    this.updateAll = true;
  }

  public onupdateNameClass() {
    this.updateNameClass = this.updateNameClass === false ? true : false;
    this.updateAll = true;
  }

  public onupdateHomeTeacher() {
    this.updateHomeTeacher = this.updateHomeTeacher === false ? true : false;
    this.updateAll = true;
  }

  public onEditAll() {
    this.updateYearAcademic = true;
    this.updateNameClass = true;
    this.updateHomeTeacher = true;
    this.updateAll = false;
  }

  public onCancelEditAll() {
    this.updateYearAcademic = false;
    this.updateNameClass = false;
    this.updateHomeTeacher = false;
    this.updateAll = true;
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
