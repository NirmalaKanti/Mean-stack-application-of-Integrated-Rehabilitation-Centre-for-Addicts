import { TestBed } from '@angular/core/testing';

import { Page24serviceService } from './page24service.service';

describe('Page24serviceService', () => {
  let service: Page24serviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Page24serviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
