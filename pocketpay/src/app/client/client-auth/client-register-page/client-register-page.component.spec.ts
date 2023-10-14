import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientRegisterPageComponent } from './client-register-page.component';

describe('ClientRegisterPageComponent', () => {
  let component: ClientRegisterPageComponent;
  let fixture: ComponentFixture<ClientRegisterPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientRegisterPageComponent]
    });
    fixture = TestBed.createComponent(ClientRegisterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
