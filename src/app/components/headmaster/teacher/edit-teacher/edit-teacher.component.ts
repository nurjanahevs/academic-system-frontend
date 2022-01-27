import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-teacher',
  templateUrl: './edit-teacher.component.html',
  styleUrls: ['./edit-teacher.component.css']
})
export class EditTeacherComponent implements OnInit {
  public spinner = false;
  public updateFullname = false;
  public updateEmail = false;
  public updatePassword = false;
  public updateBirthday = false;
  public updateAll = true;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this._spinner();
  }
  public _spinner() {
    setTimeout(() => {
      this.spinner = true;
    }, 2000);
  }

  public onUpdateFullname() {
    this.updateFullname = this.updateFullname === false ? true : false;
    this.updateAll = true;
  }

  public onUpdateEmail() {
    this.updateEmail = this.updateEmail === false ? true : false;
    this.updateAll = true;
  }

  public onupdatePassword() {
    this.updatePassword = this.updatePassword === false ? true : false;
    this.updateAll = true;
  }

  public onUpdateBirthday() {
    this.updateBirthday = this.updateBirthday === false ? true : false;
    this.updateAll = true;
  }

  public onEditAll() {
    this.updateFullname = true;
    this.updateEmail = true;
    this.updatePassword = true;
    this.updateBirthday = true;
    this.updateAll = false;
  }

  public onCancelEditAll() {
    this.updateFullname = false;
    this.updateEmail = false;
    this.updatePassword = false;
    this.updateBirthday = false;
    this.updateAll = true;
  }

  public onSave() {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
      showConfirmButton: false,
      timer: 3000,
    });
  }

  public onBack() {
    this.router.navigate(['/headmaster/teacher']);
  }
}
