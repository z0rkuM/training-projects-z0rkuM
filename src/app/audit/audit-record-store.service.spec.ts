import { TestBed } from '@angular/core/testing';

import { AuditRecordStoreService } from './audit-record-store.service';

describe('AuditRecordStoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuditRecordStoreService = TestBed.get(AuditRecordStoreService);
    expect(service).toBeTruthy();
  });
});
