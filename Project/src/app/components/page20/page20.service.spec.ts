import { TestBed } from '@angular/core/testing';

import { Page20Service } from './page20.service';

describe('Page20Service', () => {
  let service: Page20Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Page20Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
