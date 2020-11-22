import { TestBed } from '@angular/core/testing';

import { InTheaterService } from './in-theater.service';

describe('InTheaterService', () => {
  let service: InTheaterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InTheaterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
