import { Component, OnInit } from '@angular/core';
import { IParent } from 'src/app/interface/IParent';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { ParentService } from '../parent.service';

@Component({
  selector: 'app-parent-dashboard',
  templateUrl: './parent-dashboard.component.html',
  styleUrls: ['./parent-dashboard.component.css'],
})
export class ParentDashboardComponent implements OnInit {
  idParent: any;
  parents!: IParent;

  constructor(
    private tokenStorage: TokenStorageService,
    private parentService: ParentService
  ) {}

  ngOnInit(): void {
    if (!localStorage.getItem('foo')) {
      localStorage.setItem('foo', 'no reload');
      location.reload();
    } else {
      localStorage.removeItem('foo');
    }
    this.getParents();
  }

  public getParents() {
    this.idParent = this.tokenStorage.getUser();
    const _idParent = this.idParent.user.id;
    this.parentService.getParent(_idParent).subscribe((res: any) => {
      this.parents = res.body;
    });
  }
}
