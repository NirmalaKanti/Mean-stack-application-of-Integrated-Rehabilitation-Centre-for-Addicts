import { TestBed } from '@angular/core/testing';

import { Page29Service } from './page29.service';

describe('Page29Service', () => {
  let service: Page29Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Page29Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
