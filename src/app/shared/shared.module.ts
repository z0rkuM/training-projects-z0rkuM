import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material';
import { ShowLoaderComponent } from './show-loader/show-loader.component';

@NgModule({
  declarations: [ShowLoaderComponent],
  imports: [CommonModule, MatProgressSpinnerModule],
  exports: [ShowLoaderComponent]
})
export class SharedModule {}
