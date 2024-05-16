import { TestBed } from '@angular/core/testing';

import { InscrptionService } from './inscrption.service';

describe('InscrptionService', () => {
  let service: InscrptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InscrptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
