import { TestBed } from '@angular/core/testing';

import { MonteSeuBoloService } from './monte-seu-bolo.service';

describe('MonteSeuBoloService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MonteSeuBoloService = TestBed.get(MonteSeuBoloService);
    expect(service).toBeTruthy();
  });
});
