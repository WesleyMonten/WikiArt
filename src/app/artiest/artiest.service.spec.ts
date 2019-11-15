import { TestBed } from '@angular/core/testing';

import { ArtiestService } from './artiest.service';

describe('ArtiestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArtiestService = TestBed.get(ArtiestService);
    expect(service).toBeTruthy();
  });
});
