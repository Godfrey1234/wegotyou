import { TestBed } from '@angular/core/testing';

import { WegotyouService } from './wegotyou.service';



describe('WegotyouService', () => {
  let service: WegotyouService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WegotyouService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
