import { TestBed } from '@angular/core/testing';

import { SecondserService } from './secondser.service';

describe('SecondserService', () => {
  let service: SecondserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SecondserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

