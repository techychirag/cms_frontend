import { TestBed } from '@angular/core/testing';

import { OfficerAuthGuardGuard } from './officer-auth-guard.guard';

describe('OfficerAuthGuardGuard', () => {
  let guard: OfficerAuthGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(OfficerAuthGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
