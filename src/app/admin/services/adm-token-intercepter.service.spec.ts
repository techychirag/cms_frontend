import { TestBed } from '@angular/core/testing';

import { AdmTokenIntercepterService } from './adm-token-intercepter.service';

describe('AdmTokenIntercepterService', () => {
  let service: AdmTokenIntercepterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdmTokenIntercepterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
