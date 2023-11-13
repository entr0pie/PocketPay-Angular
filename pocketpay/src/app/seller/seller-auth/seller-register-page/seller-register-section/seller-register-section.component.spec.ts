import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerRegisterSectionComponent } from './seller-register-section.component';

describe('SellerRegisterSectionComponent', () => {
  let component: SellerRegisterSectionComponent;
  let fixture: ComponentFixture<SellerRegisterSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SellerRegisterSectionComponent]
    });
    fixture = TestBed.createComponent(SellerRegisterSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
