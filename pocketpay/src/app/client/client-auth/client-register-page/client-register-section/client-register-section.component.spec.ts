import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientRegisterSectionComponent } from './client-register-section.component';

describe('ClientRegisterSectionComponent', () => {
  let component: ClientRegisterSectionComponent;
  let fixture: ComponentFixture<ClientRegisterSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientRegisterSectionComponent]
    });
    fixture = TestBed.createComponent(ClientRegisterSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
