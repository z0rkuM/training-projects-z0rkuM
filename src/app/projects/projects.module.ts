import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { environment } from '../../environments/environment';
import { SharedModule } from '../shared/shared.module';
import { EnviromentProjectsService } from './enviroment-projects.service';
import { HttpProjectsService } from './http-projects.service';
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

const projectsFactory = (httpClient: HttpClient) => {
  if (environment.projectsImpl === 'RESTAPI') {
    return new HttpProjectsService(httpClient);
  } else {
    return new EnviromentProjectsService();
  }
};

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
  imports: [CommonModule, ProjectsRoutingModule, FormsModule, HttpClientModule, SharedModule],
  exports: [DashboardComponent],
  providers: [
    {
      provide: ProjectsService,
      useFactory: projectsFactory,
      deps: [HttpClient]
      //useClass: HttpProjectsService
      //useClass: EnviromentProjectsService
    }
  ]
})
export class ProjectsModule {}
