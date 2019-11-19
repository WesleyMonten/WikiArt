import { TestBed } from '@angular/core/testing';

import { SchilderijService } from './schilderij.service';

describe('SchilderijService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SchilderijService = TestBed.get(SchilderijService);
    expect(service).toBeTruthy();
  });
});
