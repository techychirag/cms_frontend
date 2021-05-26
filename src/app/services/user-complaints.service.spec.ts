import { TestBed } from '@angular/core/testing';

import { UserComplaintsService } from './user-complaints.service';

describe('UserComplaintsService', () => {
  let service: UserComplaintsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserComplaintsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
