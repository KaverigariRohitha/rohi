import { TestBed } from '@angular/core/testing';

import { TimeserviceService } from './time.service';

describe('TimeserviceService', () => {
  let service: TimeserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimeserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
