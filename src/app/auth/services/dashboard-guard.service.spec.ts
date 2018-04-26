import { TestBed, inject } from '@angular/core/testing';

import { DashboardGuard } from './dashboard-guard.service';

describe('DashboardGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DashboardGuard]
    });
  });

  it('should be created', inject([DashboardGuard], (service: DashboardGuard) => {
    expect(service).toBeTruthy();
  }));
});
