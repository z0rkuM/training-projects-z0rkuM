import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { ProjectsService } from './projects.service';
import { Project } from './projects/models/project.model';

@Injectable()
export class EnviromentProjectsService implements ProjectsService {
  static INDEX_NOT_FOUND = -1;
  findAll() {
    return environment.projects;
  }
  filter(filter: Project) {
    return environment.projects.filter(this.constructFilter(filter));
  }
  find(filter: Project) {
    return environment.projects.find(this.constructFilter(filter));
  }
  findById(id: number) {
    return environment.projects.find(p => p.id === id);
  }
  add(project: Project) {
    project.id = this.getNextId();
    environment.projects.push({ ...project });
  }
  delete(id: number) {
    environment.projects.splice(environment.projects.findIndex(p => p.id === id), 1);
  }
  private getNextId(): number {
    let max = -1;
    environment.projects.forEach(p => (max = max < p.id ? p.id : max));
    return max + 1;
  }
  private constructFilter(filter: Project) {
    return (p: Project) =>
      (filter.id == null || filter.id === p.id) &&
      (filter.name === '' ||
        p.name.toLowerCase().indexOf(filter.name.toLowerCase()) !== EnviromentProjectsService.INDEX_NOT_FOUND);
  }
  constructor() {}
}
