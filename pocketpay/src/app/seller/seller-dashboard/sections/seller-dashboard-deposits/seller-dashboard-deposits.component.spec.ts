import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerDashboardDepositsComponent } from './seller-dashboard-deposits.component';

describe('SellerDashboardDepositsComponent', () => {
  let component: SellerDashboardDepositsComponent;
  let fixture: ComponentFixture<SellerDashboardDepositsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SellerDashboardDepositsComponent]
    });
    fixture = TestBed.createComponent(SellerDashboardDepositsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
