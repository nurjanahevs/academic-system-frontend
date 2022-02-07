import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulestudentParentComponent } from './schedulestudent-parent.component';

describe('SchedulestudentParentComponent', () => {
  let component: SchedulestudentParentComponent;
  let fixture: ComponentFixture<SchedulestudentParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchedulestudentParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedulestudentParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
