import { TestBed } from '@angular/core/testing';

import { Page25serviceService } from './page25service.service';

describe('Page25serviceService', () => {
  let service: Page25serviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Page25serviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
