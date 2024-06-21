import { TestBed } from '@angular/core/testing';

import { Page21serviceService } from './page21service.service';

describe('Page21serviceService', () => {
  let service: Page21serviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Page21serviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
