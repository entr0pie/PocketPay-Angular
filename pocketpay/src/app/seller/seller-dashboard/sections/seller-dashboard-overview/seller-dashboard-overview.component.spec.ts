import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerDashboardOverviewComponent } from './seller-dashboard-overview.component';

describe('SellerDashboardOverviewComponent', () => {
  let component: SellerDashboardOverviewComponent;
  let fixture: ComponentFixture<SellerDashboardOverviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SellerDashboardOverviewComponent]
    });
    fixture = TestBed.createComponent(SellerDashboardOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
