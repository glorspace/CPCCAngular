import { TestBed, inject } from '@angular/core/testing';

import { SmallGroupService } from './small-group.service';

describe('SmallGroupService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SmallGroupService]
    });
  });

  it('should be created', inject([SmallGroupService], (service: SmallGroupService) => {
    expect(service).toBeTruthy();
  }));
});
