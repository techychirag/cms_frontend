import { TestBed } from '@angular/core/testing';

import { AdmAuthGuard } from './adm-auth.guard';

describe('AdmAuthGuard', () => {
  let guard: AdmAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AdmAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
