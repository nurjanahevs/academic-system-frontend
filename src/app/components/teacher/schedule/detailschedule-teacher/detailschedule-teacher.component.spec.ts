import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailscheduleTeacherComponent } from './detailschedule-teacher.component';

describe('DetailscheduleTeacherComponent', () => {
  let component: DetailscheduleTeacherComponent;
  let fixture: ComponentFixture<DetailscheduleTeacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailscheduleTeacherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailscheduleTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
