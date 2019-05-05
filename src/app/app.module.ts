import { NgModule } from '@angular/core';
import { GestureConfig } from '@angular/material';
import { BrowserModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuditRecordStoreService } from './audit/audit-record-store.service';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, CoreModule, SharedModule, BrowserAnimationsModule],
  providers: [
    { provide: HAMMER_GESTURE_CONFIG, useClass: GestureConfig },
    {
      provide: AuditRecordStoreService,
      useClass: AuditRecordStoreService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
