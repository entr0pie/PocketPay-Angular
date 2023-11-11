import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientDashboardWithdrawsComponent } from './client-dashboard-withdraws.component';

describe('ClientDashboardWithdrawsComponent', () => {
  let component: ClientDashboardWithdrawsComponent;
  let fixture: ComponentFixture<ClientDashboardWithdrawsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientDashboardWithdrawsComponent]
    });
    fixture = TestBed.createComponent(ClientDashboardWithdrawsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
