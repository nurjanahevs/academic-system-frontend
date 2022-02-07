import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllscheduleComponent } from './allschedule.component';

describe('AllscheduleComponent', () => {
  let component: AllscheduleComponent;
  let fixture: ComponentFixture<AllscheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllscheduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllscheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
