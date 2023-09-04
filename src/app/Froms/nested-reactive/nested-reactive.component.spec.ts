import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedReactiveComponent } from './nested-reactive.component';

describe('NestedReactiveComponent', () => {
  let component: NestedReactiveComponent;
  let fixture: ComponentFixture<NestedReactiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NestedReactiveComponent]
    });
    fixture = TestBed.createComponent(NestedReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
