import { TestBed } from '@angular/core/testing';

import { SuperBikeService } from './super-bike.service';

describe('SuperBikeService', () => {
  let service: SuperBikeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuperBikeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
