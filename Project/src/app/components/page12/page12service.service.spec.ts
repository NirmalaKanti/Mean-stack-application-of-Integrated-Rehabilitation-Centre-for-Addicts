import { TestBed } from '@angular/core/testing';

import { Page12serviceService } from './page12service.service';

describe('Page12serviceService', () => {
  let service: Page12serviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Page12serviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
