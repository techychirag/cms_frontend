import { TestBed } from '@angular/core/testing';

import { OfficerTokenIntercepterService } from './officer-token-intercepter.service';

describe('OfficerTokenIntercepterService', () => {
  let service: OfficerTokenIntercepterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OfficerTokenIntercepterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
