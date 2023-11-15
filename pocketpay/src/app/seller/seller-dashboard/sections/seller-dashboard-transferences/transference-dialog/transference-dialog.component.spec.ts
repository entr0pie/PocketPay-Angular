import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferenceDialogComponent } from './transference-dialog.component';

describe('TransferenceDialogComponent', () => {
  let component: TransferenceDialogComponent;
  let fixture: ComponentFixture<TransferenceDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransferenceDialogComponent]
    });
    fixture = TestBed.createComponent(TransferenceDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
