import { TestBed } from '@angular/core/testing';

import { SeventhService } from './seventh.service';

describe('SeventhService', () => {
  let service: SeventhService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeventhService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
