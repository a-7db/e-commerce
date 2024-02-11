import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFillterComponent } from './product-fillter.component';

describe('ProductFillterComponent', () => {
  let component: ProductFillterComponent;
  let fixture: ComponentFixture<ProductFillterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductFillterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductFillterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
