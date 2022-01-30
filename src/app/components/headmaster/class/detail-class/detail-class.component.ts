import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-class',
  templateUrl: './detail-class.component.html',
  styleUrls: ['./detail-class.component.css']
})
export class DetailClassComponent implements OnInit {
  spinner = false;

  constructor() { }

  ngOnInit(): void {
  }

  public _spinner() {
    setTimeout(() => {
      this.spinner = true;
    }, 2000);
  }

}
