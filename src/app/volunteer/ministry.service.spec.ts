import { TestBed, inject } from '@angular/core/testing';

import { MinistryService } from './ministry.service';

describe('MinistryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MinistryService]
    });
  });

  it('should be created', inject([MinistryService], (service: MinistryService) => {
    expect(service).toBeTruthy();
  }));
});
