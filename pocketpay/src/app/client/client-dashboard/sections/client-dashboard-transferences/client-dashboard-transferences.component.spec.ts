import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientDashboardTransferencesComponent } from './client-dashboard-transferences.component';

describe('ClientDashboardTransferencesComponent', () => {
  let component: ClientDashboardTransferencesComponent;
  let fixture: ComponentFixture<ClientDashboardTransferencesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientDashboardTransferencesComponent]
    });
    fixture = TestBed.createComponent(ClientDashboardTransferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
