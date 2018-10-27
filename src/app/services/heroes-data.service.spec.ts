import { TestBed, inject } from '@angular/core/testing';

import { HeroesDataService } from './heroes-data.service';

describe('HeroesDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeroesDataService]
    });
  });

  it('should be created', inject([HeroesDataService], (service: HeroesDataService) => {
    expect(service).toBeTruthy();
  }));
});
