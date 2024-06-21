import { TestBed } from '@angular/core/testing';

import { Page14serviceService } from './page14service.service';

describe('Page14serviceService', () => {
  let service: Page14serviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Page14serviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
