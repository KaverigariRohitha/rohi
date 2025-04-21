import { TestBed } from '@angular/core/testing';

import { StudentdetService } from './studentdet.service';

describe('StudentdetService', () => {
  let service: StudentdetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentdetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
