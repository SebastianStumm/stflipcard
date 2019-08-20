import { TestBed } from '@angular/core/testing';

import { FlipcardService } from './flipcard.service';

describe('FlipcardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FlipcardService = TestBed.get(FlipcardService);
    expect(service).toBeTruthy();
  });
});
