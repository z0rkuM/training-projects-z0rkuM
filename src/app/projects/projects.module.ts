import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProjectsRoutingModule } from './projects-routing.module';
import { DashboardComponent } from './projects/dashboard/dashboard.component';
import { NewProjectComponent } from './projects/new-project/new-project.component';
import { ProjectsComponent } from './projects/projects.component';
import { ViewerProjectComponent } from './projects/viewer-project/viewer-project.component';
import { DashboardElementComponent } from './projects/dashboard/dashboard-element/dashboard-element.component';
import { FilterProjectsFormComponent } from './projects/filter-projects-form/filter-projects-form.component';

@NgModule({
  declarations: [ProjectsComponent, ViewerProjectComponent, NewProjectComponent, DashboardComponent, DashboardElementComponent, FilterProjectsFormComponent],
  imports: [CommonModule, ProjectsRoutingModule, FormsModule],
  exports: [DashboardComponent]
})
export class ProjectsModule {}
