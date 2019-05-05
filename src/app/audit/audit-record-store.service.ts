import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuditRecord } from './models/audit-record';

@Injectable()
export class AuditRecordStoreService {
  private record = null;
  private record$ = new BehaviorSubject<AuditRecord>(this.record);
  constructor() {}

  public select$ = () => {
    return this.record$.asObservable();
  };
  public dispatch(record) {
    this.record = record;
    this.record$.next({ ...this.record });
  }
}
