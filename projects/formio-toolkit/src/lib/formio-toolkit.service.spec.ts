import { TestBed } from '@angular/core/testing';

import { FormioToolkitService } from './formio-toolkit.service';

describe('FormioToolkitService', () => {
  let service: FormioToolkitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormioToolkitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
