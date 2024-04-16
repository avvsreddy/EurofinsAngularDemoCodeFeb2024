import { TestBed } from '@angular/core/testing';

import { StudentregService } from './studentreg.service';

describe('StudentregService', () => {
  let service: StudentregService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentregService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
