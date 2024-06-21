import { TestBed } from '@angular/core/testing';

import { FourthService } from './fourth.service';

describe('FourthService', () => {
  let service: FourthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FourthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
