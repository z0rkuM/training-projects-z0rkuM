import { Component, Inject, OnInit } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material';
import { AuditRecord } from '../models/audit-record';

@Component({
  selector: 'app-audit-snackbar',
  templateUrl: './audit-snackbar.component.html',
  styleUrls: ['./audit-snackbar.component.css']
})
export class AuditSnackbarComponent implements OnInit {
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: AuditRecord) {}

  ngOnInit() {}

  getColor(method: string) {
    if (method === 'GET') {
      return 'green';
    }
    if (method === 'DELETE') {
      return 'red';
    }
    if (method === 'POST') {
      return 'blue';
    }
    return 'black';
  }
}
