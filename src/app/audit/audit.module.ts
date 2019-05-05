import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AuditInterceptorService } from './audit-interceptor.service';
import { AuditSnackbarComponent } from './audit-snackbar/audit-snackbar.component';

@NgModule({
  declarations: [AuditSnackbarComponent],
  imports: [CommonModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuditInterceptorService,
      multi: true
    }
  ],
  entryComponents: [AuditSnackbarComponent]
})
export class AuditModule {}
