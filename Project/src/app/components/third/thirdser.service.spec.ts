import { TestBed } from '@angular/core/testing';

import { ThirdserService } from './thirdser.service';

describe('ThirdserService', () => {
  let service: ThirdserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThirdserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
