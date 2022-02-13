import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailstudentYearComponent } from './detailstudent-year.component';

describe('DetailstudentYearComponent', () => {
  let component: DetailstudentYearComponent;
  let fixture: ComponentFixture<DetailstudentYearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailstudentYearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailstudentYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
