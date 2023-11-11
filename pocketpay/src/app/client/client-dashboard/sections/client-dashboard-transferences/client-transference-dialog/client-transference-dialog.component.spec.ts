import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientTransferenceDialogComponent } from './client-transference-dialog.component';

describe('ClientTransferenceDialogComponent', () => {
  let component: ClientTransferenceDialogComponent;
  let fixture: ComponentFixture<ClientTransferenceDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientTransferenceDialogComponent]
    });
    fixture = TestBed.createComponent(ClientTransferenceDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
