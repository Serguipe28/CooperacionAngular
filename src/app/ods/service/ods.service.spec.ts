import { TestBed } from '@angular/core/testing';

import { ODSService } from './ods.service';

describe('ODSService', () => {
  let service: ODSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ODSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
