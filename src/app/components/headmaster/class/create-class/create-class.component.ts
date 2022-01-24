import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-class',
  templateUrl: './create-class.component.html',
  styleUrls: ['./create-class.component.css']
})
export class CreateClassComponent implements OnInit {
  createFormClass!: FormGroup;
  spinner = false;

  constructor(private formClass: FormBuilder) {}

  ngOnInit(): void {
    this._spinner();
    this.createClassFormInit();
  }

  private createClassFormInit() {
    this.createFormClass = this.formClass.group({
      nameclass: ['', Validators.required],
      yearAcademic: ['', Validators.required]
    });
  }

  public _spinner() {
    setTimeout(() => {
      this.spinner = true;
    }, 2000);
  }

  public onSubmit() {
    console.log(this.createFormClass);
  }

  public onCancel() {}
}
