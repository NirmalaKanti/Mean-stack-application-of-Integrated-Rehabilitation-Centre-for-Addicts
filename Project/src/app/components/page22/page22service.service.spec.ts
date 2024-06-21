import { TestBed } from '@angular/core/testing';

import { Page22serviceService } from './page22service.service';

describe('Page22serviceService', () => {
  let service: Page22serviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Page22serviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
