import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditSnackbarComponent } from './audit-snackbar.component';

describe('AuditSnackbarComponent', () => {
  let component: AuditSnackbarComponent;
  let fixture: ComponentFixture<AuditSnackbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuditSnackbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditSnackbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
