import { TestBed } from '@angular/core/testing';

import { GreetingService } from './greeting.service';

describe('GreetingservicesService', () => {
  let service: GreetingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GreetingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
