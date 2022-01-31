import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HeadmasterService } from '../../headmaster.service';

@Component({
  selector: 'app-setcourse',
  templateUrl: './setcourse.component.html',
  styleUrls: ['./setcourse.component.css']
})
export class SetcourseComponent implements OnInit {
  spinner = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formCourse: FormBuilder,
    private headmasterService: HeadmasterService
  ) { }

  ngOnInit(): void {
    this._spinner()
  }

  public _spinner() {
    setTimeout(() => {
      this.spinner = true;
    }, 2000);
  }

  public onSave() {

  }

  public onBack() {
    this.router.navigate(['/headmaster/course']);
  }

}
