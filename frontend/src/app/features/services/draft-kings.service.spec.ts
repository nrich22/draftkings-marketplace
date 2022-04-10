import { TestBed } from '@angular/core/testing';

import { DraftKingsService } from './draft-kings.service';

describe('DraftKingsService', () => {
  let service: DraftKingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DraftKingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
