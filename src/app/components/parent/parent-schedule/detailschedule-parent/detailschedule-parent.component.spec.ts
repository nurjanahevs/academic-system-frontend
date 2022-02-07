import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailscheduleParentComponent } from './detailschedule-parent.component';

describe('DetailscheduleParentComponent', () => {
  let component: DetailscheduleParentComponent;
  let fixture: ComponentFixture<DetailscheduleParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailscheduleParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailscheduleParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
