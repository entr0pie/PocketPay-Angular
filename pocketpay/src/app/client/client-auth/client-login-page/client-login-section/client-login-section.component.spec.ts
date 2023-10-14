import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientLoginSectionComponent } from './client-login-section.component';

describe('ClientLoginSectionComponent', () => {
  let component: ClientLoginSectionComponent;
  let fixture: ComponentFixture<ClientLoginSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientLoginSectionComponent]
    });
    fixture = TestBed.createComponent(ClientLoginSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
