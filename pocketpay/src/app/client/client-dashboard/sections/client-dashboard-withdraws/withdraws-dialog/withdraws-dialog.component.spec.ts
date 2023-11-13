import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithdrawsDialogComponent } from './withdraws-dialog.component';

describe('WithdrawsDialogComponent', () => {
  let component: WithdrawsDialogComponent;
  let fixture: ComponentFixture<WithdrawsDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WithdrawsDialogComponent]
    });
    fixture = TestBed.createComponent(WithdrawsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
