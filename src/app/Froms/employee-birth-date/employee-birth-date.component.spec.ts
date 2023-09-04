import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeBirthDateComponent } from './employee-birth-date.component';

describe('EmployeeBirthDateComponent', () => {
  let component: EmployeeBirthDateComponent;
  let fixture: ComponentFixture<EmployeeBirthDateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeBirthDateComponent]
    });
    fixture = TestBed.createComponent(EmployeeBirthDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
