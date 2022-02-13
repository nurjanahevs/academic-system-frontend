import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {
  editParent,
  statusActiveParent,
  statusDeadActiveParent,
} from 'src/app/interface/IParent';
import Swal from 'sweetalert2';
import { HeadmasterService } from '../../headmaster.service';

@Component({
  selector: 'app-edit-parents',
  templateUrl: './edit-parents.component.html',
  styleUrls: ['./edit-parents.component.css'],
})
export class EditParentsComponent implements OnInit {
  spinner = false;
  editParentForm!: FormGroup;
  idParent: any;
  counterStudentArray!: number;
  onNewStudent = false;
  statusParent: any;
  formDeadActive = false;
  formActive = false;
  buttonDeadActive = false;
  buttonActive = false;

  constructor(
    private router: Router,
    private headmasterService: HeadmasterService,
    private formParent: FormBuilder,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.idParent = params['id'];
    });
    this._spinner();
    this.editParentFormInit();
    this.getValueParent();
    this.getStatusParent();
  }

  public _spinner() {
    setTimeout(() => {
      this.spinner = true;
    }, 2000);
  }

  public getValueParent() {
    this.headmasterService
      .getSpesificParent(this.idParent)
      .subscribe((res: any) => {
        this.studentParentControl['father'].setValue(res.body.father);
        this.studentParentControl['mother'].setValue(res.body.mother);
        this.studentParentControl['birthDate'].setValue(res.body.birthDate);
        this.studentParentControl['status'].setValue(res.body.status);
        this.studentParentControl['student'].setValue(
          res.body.student[0].fullName
        );
      });
  }

  public editParentFormInit() {
    this.editParentForm = this.formParent.group({
      father: ['', Validators.required],
      mother: ['', Validators.required],
      birthDate: ['', Validators.required],
      status: [''],
      student: [''],
      addStudent: this.formParent.array([]),
      toActive: ['Active', Validators.required],
      toDeadActive: ['Deadactive', Validators.required],
    });
  }

  public getStatusParent() {
    this.headmasterService
      .getSpesificParent(this.idParent)
      .subscribe((res: any) => {
        this.statusParent = res.body.status;
        if (this.statusParent === this.studentParentControl['toActive'].value) {
          this.buttonDeadActive = true;
        } else if (
          this.statusParent === this.studentParentControl['toDeadActive'].value
        ) {
          this.buttonActive = true;
        }
      });
  }

  public toActive() {
    const status: statusActiveParent = {
      toActive: this.studentParentControl['toActive'].value,
    };
    this.headmasterService
      .toActiveParent(this.idParent, status.toActive)
      .subscribe(
        (res) => {
          Swal.fire({
            icon: 'success',
            title: 'Change Status Parent Success',
            text: 'Headmaster to Deadactive Parent Data Successfull',
            showConfirmButton: true,
            timer: 3000,
          });
          this.router.navigate(['/headmaster/parent']);
        },
        () => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            showConfirmButton: false,
            timer: 3000,
          });
        }
      );
  }

  public toDeadActive() {
    const status: statusDeadActiveParent = {
      toDeadActive: this.studentParentControl['toDeadActive'].value,
    };
    this.headmasterService
      .toDeadActiveParent(this.idParent, status.toDeadActive)
      .subscribe(
        (res) => {
          Swal.fire({
            icon: 'success',
            title: 'Change Status Parent Success',
            text: 'Headmaster to Deadactive Parent Data Successfull',
            showConfirmButton: true,
            timer: 3000,
          });
          this.router.navigate(['/headmaster/parent']);
        },
        () => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            showConfirmButton: false,
            timer: 3000,
          });
        }
      );
  }

  get studentParentControl() {
    return this.editParentForm.controls;
  }

  get addStudent() {
    return this.editParentForm.get('addStudent') as FormArray;
  }

  public onAddStudent() {
    this.onNewStudent = true;
    this.addStudent.push(this.formParent.control(''));
  }

  public onSave() {
    this.counterStudentArray = 0;
    let newAdd = [];
    for (let item of this.addStudent.controls) {
      newAdd = this.editParentForm.get([
        'addStudent',
        this.counterStudentArray,
      ])!.value;
      this.counterStudentArray = this.counterStudentArray + 1;
    }
    const parent: editParent = {
      father: this.studentParentControl['father'].value,
      mother: this.studentParentControl['mother'].value,
      birthDate: this.studentParentControl['birthDate'].value,
      addStudent: newAdd,
    };
    console.log(this.editParentForm);
    this.headmasterService
      .editParent(
        this.idParent,
        parent.father,
        parent.mother,
        parent.birthDate,
        parent.addStudent
      )
      .subscribe(
        (res) => {
          console.log(res);
          Swal.fire({
            icon: 'success',
            title: 'Update Data Teacher Success',
            text: 'Headmaster to Update Teacher Data Successfull',
            showConfirmButton: true,
            timer: 3000,
          });
          this.router.navigate(['/headmaster/parent']);
        },
        () => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            showConfirmButton: false,
            timer: 3000,
          });
        }
      );
  }

  public onBack() {
    this.router.navigate(['/headmaster/parent']);
  }
}
