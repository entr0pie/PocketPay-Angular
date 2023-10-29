import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientDashboardPageComponent } from './client-dashboard-page.component';

describe('ClientDashboardPageComponent', () => {
  let component: ClientDashboardPageComponent;
  let fixture: ComponentFixture<ClientDashboardPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientDashboardPageComponent]
    });
    fixture = TestBed.createComponent(ClientDashboardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
