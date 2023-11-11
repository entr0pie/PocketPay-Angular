import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientDashboardOverviewComponent } from './client-dashboard-overview.component';

describe('ClientDashboardOverviewComponent', () => {
  let component: ClientDashboardOverviewComponent;
  let fixture: ComponentFixture<ClientDashboardOverviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientDashboardOverviewComponent]
    });
    fixture = TestBed.createComponent(ClientDashboardOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
