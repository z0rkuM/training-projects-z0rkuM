import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProjectsModule } from '../projects/projects.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, ProjectsModule]
})
export class HomeModule {}
