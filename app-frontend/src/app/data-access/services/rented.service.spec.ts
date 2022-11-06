import { TestBed } from '@angular/core/testing';

import { RentedService } from './rented.service';

describe('RentedService', () => {
  let service: RentedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RentedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
