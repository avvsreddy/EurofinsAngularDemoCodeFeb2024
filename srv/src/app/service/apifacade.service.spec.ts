import { TestBed } from '@angular/core/testing';

import { ApifacadeService } from './apifacade.service';

describe('ApifacadeService', () => {
  let service: ApifacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApifacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
