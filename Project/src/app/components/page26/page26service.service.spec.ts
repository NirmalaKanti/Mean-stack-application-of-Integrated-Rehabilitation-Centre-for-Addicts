import { TestBed } from '@angular/core/testing';

import { Page26serviceService } from './page26service.service';

describe('Page26serviceService', () => {
  let service: Page26serviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Page26serviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
