import { TestBed } from '@angular/core/testing';

import { FantomeService } from './fantome.service';

describe('FantomeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FantomeService = TestBed.get(FantomeService);
    expect(service).toBeTruthy();
  });
});
