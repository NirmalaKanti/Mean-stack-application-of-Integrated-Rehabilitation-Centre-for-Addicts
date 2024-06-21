import { TestBed } from '@angular/core/testing';

import { HomService } from './hom.service';

describe('HomService', () => {
  let service: HomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
