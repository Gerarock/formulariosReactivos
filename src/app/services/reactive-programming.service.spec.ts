import { TestBed } from '@angular/core/testing';

import { ReactiveProgrammingService } from './reactive-programming.service';

describe('ReactiveProgrammingService', () => {
  let service: ReactiveProgrammingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReactiveProgrammingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
