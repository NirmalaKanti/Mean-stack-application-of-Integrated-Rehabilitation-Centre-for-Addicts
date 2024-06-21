import { TestBed } from '@angular/core/testing';

import { Page27Service } from './page27.service';

describe('Page27Service', () => {
  let service: Page27Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Page27Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
