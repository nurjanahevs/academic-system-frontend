import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllstudentScheduleComponent } from './allstudent-schedule.component';

describe('AllstudentScheduleComponent', () => {
  let component: AllstudentScheduleComponent;
  let fixture: ComponentFixture<AllstudentScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllstudentScheduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllstudentScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
