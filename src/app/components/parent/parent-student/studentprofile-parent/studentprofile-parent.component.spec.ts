import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentprofileParentComponent } from './studentprofile-parent.component';

describe('StudentprofileParentComponent', () => {
  let component: StudentprofileParentComponent;
  let fixture: ComponentFixture<StudentprofileParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentprofileParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentprofileParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
