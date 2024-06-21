import { TestBed } from '@angular/core/testing';

import { Page8serviceService } from './page8service.service';

describe('Page8serviceService', () => {
  let service: Page8serviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Page8serviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
