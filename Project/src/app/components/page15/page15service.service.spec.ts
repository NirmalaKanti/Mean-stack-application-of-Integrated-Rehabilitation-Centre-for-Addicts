import { TestBed } from '@angular/core/testing';

import { Page15serviceService } from './page15service.service';

describe('Page15serviceService', () => {
  let service: Page15serviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Page15serviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
