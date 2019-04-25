import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ShowLoaderComponent } from './show-loader/show-loader.component';

@NgModule({
  declarations: [ShowLoaderComponent],
  imports: [CommonModule],
  exports: [ShowLoaderComponent]
})
export class SharedModule {}
