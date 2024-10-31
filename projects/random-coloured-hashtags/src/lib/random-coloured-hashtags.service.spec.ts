import { TestBed } from '@angular/core/testing';

import { RandomColouredHashtagsService } from './random-coloured-hashtags.service';

describe('RandomColouredHashtagsService', () => {
  let service: RandomColouredHashtagsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RandomColouredHashtagsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
