import { TestBed } from '@angular/core/testing';

import { TransferenceService } from './transference.service';

describe('TransferenceService', () => {
  let service: TransferenceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransferenceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
