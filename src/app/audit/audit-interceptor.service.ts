import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuditRecordStoreService } from './audit-record-store.service';

@Injectable()
export class AuditInterceptorService implements HttpInterceptor {
  constructor(private auditRecordStoreService: AuditRecordStoreService) {}

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(tap(this.audit(req).bind(this)));
  }

  private audit(req: HttpRequest<any>) {
    return res => {
      if (res instanceof HttpResponse) {
        const record = { ok: res.ok, status: res.status, url: res.url, method: req.method };
        console.log(record);
        this.auditRecordStoreService.dispatch(record);
      }
    };
  }
}
