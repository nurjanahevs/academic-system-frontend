import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllscheduleParentComponent } from './allschedule-parent.component';

describe('AllscheduleParentComponent', () => {
  let component: AllscheduleParentComponent;
  let fixture: ComponentFixture<AllscheduleParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllscheduleParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllscheduleParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
