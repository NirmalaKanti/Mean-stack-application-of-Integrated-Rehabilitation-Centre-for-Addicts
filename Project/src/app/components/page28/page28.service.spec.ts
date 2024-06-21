import { TestBed } from '@angular/core/testing';

import { Page28Service } from './page28.service';

describe('Page28Service', () => {
  let service: Page28Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Page28Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
