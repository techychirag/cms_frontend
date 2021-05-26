import { TestBed } from '@angular/core/testing';

import { ComplaintRegisteryService } from './complaint-registery.service';

describe('ComplaintRegisteryService', () => {
  let service: ComplaintRegisteryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComplaintRegisteryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
