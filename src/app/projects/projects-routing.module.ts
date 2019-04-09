import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { ViewerProjectComponent } from './projects/viewer-project/viewer-project.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectsComponent
  },
  {
    path: ':id',
    component: ViewerProjectComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule {}
