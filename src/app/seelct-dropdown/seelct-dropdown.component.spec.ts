import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeelctDropdownComponent } from './seelct-dropdown.component';

describe('SeelctDropdownComponent', () => {
  let component: SeelctDropdownComponent;
  let fixture: ComponentFixture<SeelctDropdownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeelctDropdownComponent]
    });
    fixture = TestBed.createComponent(SeelctDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
