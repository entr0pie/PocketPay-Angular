import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerLoginSectionComponent } from './seller-login-section.component';

describe('SellerLoginSectionComponent', () => {
  let component: SellerLoginSectionComponent;
  let fixture: ComponentFixture<SellerLoginSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SellerLoginSectionComponent]
    });
    fixture = TestBed.createComponent(SellerLoginSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
