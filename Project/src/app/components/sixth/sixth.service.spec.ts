import { TestBed } from '@angular/core/testing';

import { SixthService } from './sixth.service';

describe('SixthService', () => {
  let service: SixthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SixthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
