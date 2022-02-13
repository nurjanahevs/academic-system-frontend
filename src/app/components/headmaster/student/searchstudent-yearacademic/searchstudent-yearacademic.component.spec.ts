import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchstudentYearacademicComponent } from './searchstudent-yearacademic.component';

describe('SearchstudentYearacademicComponent', () => {
  let component: SearchstudentYearacademicComponent;
  let fixture: ComponentFixture<SearchstudentYearacademicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchstudentYearacademicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchstudentYearacademicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
