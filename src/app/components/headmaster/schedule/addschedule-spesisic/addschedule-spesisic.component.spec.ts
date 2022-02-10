import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddscheduleSpesisicComponent } from './addschedule-spesisic.component';

describe('AddscheduleSpesisicComponent', () => {
  let component: AddscheduleSpesisicComponent;
  let fixture: ComponentFixture<AddscheduleSpesisicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddscheduleSpesisicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddscheduleSpesisicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
