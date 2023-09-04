import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductdropDownComponent } from './productdrop-down.component';

describe('ProductdropDownComponent', () => {
  let component: ProductdropDownComponent;
  let fixture: ComponentFixture<ProductdropDownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductdropDownComponent]
    });
    fixture = TestBed.createComponent(ProductdropDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
