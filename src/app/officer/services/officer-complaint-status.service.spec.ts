import { TestBed } from '@angular/core/testing';

import { OfficerComplaintStatusService } from './officer-complaint-status.service';

describe('OfficerComplaintStatusService', () => {
  let service: OfficerComplaintStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OfficerComplaintStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
