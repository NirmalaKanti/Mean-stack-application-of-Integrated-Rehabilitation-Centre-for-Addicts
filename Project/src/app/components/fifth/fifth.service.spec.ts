import { TestBed } from '@angular/core/testing';

import { FifthService } from './fifth.service';

describe('FifthService', () => {
  let service: FifthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FifthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
