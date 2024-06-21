import { TestBed } from '@angular/core/testing';

import { Page11serviceService } from './page11service.service';

describe('Page11serviceService', () => {
  let service: Page11serviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Page11serviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
