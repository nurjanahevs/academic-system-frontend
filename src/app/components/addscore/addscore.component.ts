import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addscore',
  templateUrl: './addscore.component.html',
  styleUrls: ['./addscore.component.css']
})
export class AddscoreComponent implements OnInit {
  public spinner = false;
  public updateScore = false;
  
  constructor() {}

  ngOnInit(): void {
    this._spinner();
  }

  public _spinner() {
    setTimeout(() => {
      this.spinner = true;
    }, 2000);
  }

  public onUpdateScore() {
    this.updateScore = this.updateScore === false ? true : false;
    
  }

}

 

 