import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerDashboardTransferencesComponent } from './seller-dashboard-transferences.component';

describe('SellerDashboardTransferencesComponent', () => {
  let component: SellerDashboardTransferencesComponent;
  let fixture: ComponentFixture<SellerDashboardTransferencesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SellerDashboardTransferencesComponent]
    });
    fixture = TestBed.createComponent(SellerDashboardTransferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
