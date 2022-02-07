import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IParent } from 'src/app/interface/IParent';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { ParentService } from '../parent.service';

@Component({
  selector: 'app-parent-raport',
  templateUrl: './parent-raport.component.html',
  styleUrls: ['./parent-raport.component.css']
})
export class ParentRaportComponent implements OnInit {
  idParent: any;
  parents!: IParent;

  constructor(
    private tokenStorage: TokenStorageService,
    private parentService: ParentService,
  ) { }

  ngOnInit(): void {
    this.getParentStudent();
  }

  public getParentStudent() {
    this.idParent = this.tokenStorage.getUser();
    const _idParent = this.idParent.user.id;
    this.parentService.getStudentParent(_idParent).subscribe((res: any) => {
      this.parents = res.body;
    });
  }

}
