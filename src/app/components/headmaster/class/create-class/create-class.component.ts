import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClassData } from 'src/app/interface/IClass';

@Component({
  selector: 'app-create-class',
  templateUrl: './create-class.component.html',
  styleUrls: ['./create-class.component.css']
})
export class CreateClassComponent implements OnInit {
  createFormClass!: FormGroup;
  createClass: ClassData[] = [];
  spinner = false;

  constructor(private formClass: FormBuilder) {}

  ngOnInit(): void {
    this._spinner();
    this.createClassFormInit();
  }

  public _spinner() {
    setTimeout(() => {
      this.spinner = true;
    }, 2000);
  }

  private createClassFormInit() {
    this.createFormClass = this.formClass.group({
      nameclass: ['', Validators.required],
      yearAcademic: ['', Validators.required]
    });
    console.log(this.createFormClass);
  }

  // get 

  public onSubmit() {
    // const classes: ClassData = {
    //   className: this
    // }
  }

  public onCancel() {}
}
