import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerDashboardPageComponent } from './seller-dashboard-page.component';

describe('SellerDashboardPageComponent', () => {
  let component: SellerDashboardPageComponent;
  let fixture: ComponentFixture<SellerDashboardPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SellerDashboardPageComponent]
    });
    fixture = TestBed.createComponent(SellerDashboardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
