import { TestBed } from '@angular/core/testing';

import { GetCashService } from './get-cash.service';

describe('GetCashService', () => {
  let service: GetCashService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetCashService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
