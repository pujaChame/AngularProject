import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedEmployeeComponent } from './nested-employee.component';

describe('NestedEmployeeComponent', () => {
  let component: NestedEmployeeComponent;
  let fixture: ComponentFixture<NestedEmployeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NestedEmployeeComponent]
    });
    fixture = TestBed.createComponent(NestedEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
