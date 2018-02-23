import { TestBed, async, inject } from '@angular/core/testing';

import { UrlSecureGuard } from './url-secure.guard';

describe('UrlSecureGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UrlSecureGuard]
    });
  });

  it('should ...', inject([UrlSecureGuard], (guard: UrlSecureGuard) => {
    expect(guard).toBeTruthy();
  }));
});
