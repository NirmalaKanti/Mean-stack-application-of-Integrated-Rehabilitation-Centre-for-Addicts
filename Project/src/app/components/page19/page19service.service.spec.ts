import { TestBed } from '@angular/core/testing';

import { Page19serviceService } from './page19service.service';

describe('Page19serviceService', () => {
  let service: Page19serviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Page19serviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
