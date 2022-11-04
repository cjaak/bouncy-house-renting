import { TestBed } from '@angular/core/testing';

import { BouncyHouseService } from './bouncy-house.service';

describe('BouncyHouseService', () => {
  let service: BouncyHouseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BouncyHouseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
