import { TestBed } from '@angular/core/testing';

import { Page10serviceService } from './page10service.service';

describe('Page10serviceService', () => {
  let service: Page10serviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Page10serviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
