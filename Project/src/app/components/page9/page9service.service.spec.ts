import { TestBed } from '@angular/core/testing';

import { Page9serviceService } from './page9service.service';

describe('Page9serviceService', () => {
  let service: Page9serviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Page9serviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
