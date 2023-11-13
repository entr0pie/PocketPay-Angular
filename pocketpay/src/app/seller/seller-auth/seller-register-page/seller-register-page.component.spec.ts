import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerRegisterPageComponent } from './seller-register-page.component';

describe('SellerRegisterPageComponent', () => {
  let component: SellerRegisterPageComponent;
  let fixture: ComponentFixture<SellerRegisterPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SellerRegisterPageComponent]
    });
    fixture = TestBed.createComponent(SellerRegisterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
