import { TestBed } from '@angular/core/testing';

import { Page13serviceService } from './page13service.service';

describe('Page13serviceService', () => {
  let service: Page13serviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Page13serviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
