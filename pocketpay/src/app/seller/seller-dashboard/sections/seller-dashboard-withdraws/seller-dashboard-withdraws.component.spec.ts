import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerDashboardWithdrawsComponent } from './seller-dashboard-withdraws.component';

describe('SellerDashboardWithdrawsComponent', () => {
  let component: SellerDashboardWithdrawsComponent;
  let fixture: ComponentFixture<SellerDashboardWithdrawsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SellerDashboardWithdrawsComponent]
    });
    fixture = TestBed.createComponent(SellerDashboardWithdrawsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
