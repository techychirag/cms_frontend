import { TestBed } from '@angular/core/testing';

import { OfficerAuthService } from './officer-auth.service';

describe('OfficerAuthService', () => {
  let service: OfficerAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OfficerAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
