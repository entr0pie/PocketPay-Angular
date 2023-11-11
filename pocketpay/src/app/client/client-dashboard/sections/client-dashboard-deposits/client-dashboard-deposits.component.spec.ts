import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientDashboardDepositsComponent } from './client-dashboard-deposits.component';

describe('ClientDashboardDepositsComponent', () => {
  let component: ClientDashboardDepositsComponent;
  let fixture: ComponentFixture<ClientDashboardDepositsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientDashboardDepositsComponent]
    });
    fixture = TestBed.createComponent(ClientDashboardDepositsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
