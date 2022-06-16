
import { TestBed } from '@angular/core/testing';

import { GetLoansService } from './get-loans.service';

describe('GetLoansService', () => {
  let service: GetLoansService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetLoansService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
