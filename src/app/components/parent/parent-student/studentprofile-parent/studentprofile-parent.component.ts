import { Component, OnInit } from '@angular/core';
import { IParent } from 'src/app/interface/IParent';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { ParentService } from '../../parent.service';

@Component({
  selector: 'app-studentprofile-parent',
  templateUrl: './studentprofile-parent.component.html',
  styleUrls: ['./studentprofile-parent.component.css'],
})
export class StudentprofileParentComponent implements OnInit {
  idParent: any;
  parents!: IParent;

  constructor(
    private tokenStorage: TokenStorageService,
    private parentService: ParentService
  ) {}

  ngOnInit(): void {
    this.getParentStudent();
  }

  public getParentStudent() {
    this.idParent = this.tokenStorage.getUser();
    const _idParent = this.idParent.user.id;
    this.parentService.getParent(_idParent).subscribe((res: any) => {
      this.parents = res.body;
    });
  }
}
