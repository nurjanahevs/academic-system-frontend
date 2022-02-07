import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllscheduleTeacherComponent } from './allschedule-teacher.component';

describe('AllscheduleTeacherComponent', () => {
  let component: AllscheduleTeacherComponent;
  let fixture: ComponentFixture<AllscheduleTeacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllscheduleTeacherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllscheduleTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
