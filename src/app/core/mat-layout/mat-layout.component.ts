import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuditRecordStoreService } from '../../audit/audit-record-store.service';
import { AuditSnackbarComponent } from '../../audit/audit-snackbar/audit-snackbar.component';

@Component({
  selector: 'app-mat-layout',
  templateUrl: './mat-layout.component.html',
  styleUrls: ['./mat-layout.component.css']
})
export class MatLayoutComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(map(result => result.matches));

  constructor(
    private breakpointObserver: BreakpointObserver,
    private arss: AuditRecordStoreService,
    private snackBar: MatSnackBar
  ) {
    this.arss.select$().subscribe(res => {
      if (res) {
        this.snackBar.openFromComponent(AuditSnackbarComponent, { data: res });
      }
    });
  }
}
