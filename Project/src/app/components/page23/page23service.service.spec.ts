import { TestBed } from '@angular/core/testing';

import { Page23serviceService } from './page23service.service';

describe('Page23serviceService', () => {
  let service: Page23serviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Page23serviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
