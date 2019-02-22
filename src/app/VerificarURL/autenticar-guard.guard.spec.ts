import { TestBed, async, inject } from '@angular/core/testing';

import { AutenticarGuardGuard } from './autenticar-guard.guard';

describe('AutenticarGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AutenticarGuardGuard]
    });
  });

  it('should ...', inject([AutenticarGuardGuard], (guard: AutenticarGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
