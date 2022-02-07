import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailstudentScheduleComponent } from './detailstudent-schedule.component';

describe('DetailstudentScheduleComponent', () => {
  let component: DetailstudentScheduleComponent;
  let fixture: ComponentFixture<DetailstudentScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailstudentScheduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailstudentScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
