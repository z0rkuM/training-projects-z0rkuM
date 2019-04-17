import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EnviromentProjectsService } from './enviroment-projects.service';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsService } from './projects.service';
import { DashboardElementComponent } from './projects/dashboard/dashboard-element/dashboard-element.component';
import { DashboardComponent } from './projects/dashboard/dashboard.component';
import { FilterProjectsFormComponent } from './projects/filter-projects-form/filter-projects-form.component';
import { NewProjectFormComponent } from './projects/new-project/new-project-form/new-project-form.component';
import { NewProjectComponent } from './projects/new-project/new-project.component';
import { ProjectsListComponent } from './projects/projects-list/projects-list.component';
import { ProjectsComponent } from './projects/projects.component';
import { ViewerProjectFormComponent } from './projects/viewer-project/viewer-project-form/viewer-project-form.component';
import { ViewerProjectComponent } from './projects/viewer-project/viewer-project.component';

@NgModule({
  declarations: [
    ProjectsComponent,
    ViewerProjectComponent,
    NewProjectComponent,
    DashboardComponent,
    DashboardElementComponent,
    FilterProjectsFormComponent,
    ProjectsListComponent,
    ViewerProjectFormComponent,
    NewProjectFormComponent
  ],
  imports: [CommonModule, ProjectsRoutingModule, FormsModule],
  exports: [DashboardComponent],
  providers: [
    {
      provide: ProjectsService,
      useClass: EnviromentProjectsService
    }
  ]
})
export class ProjectsModule {}
