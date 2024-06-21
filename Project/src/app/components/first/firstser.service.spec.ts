import { TestBed } from '@angular/core/testing';

import { FirstserService } from './firstser.service';

describe('FirstserService', () => {
  let service: FirstserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirstserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
