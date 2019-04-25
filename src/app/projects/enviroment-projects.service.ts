import { Injectable } from '@angular/core';
import { EMPTY, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { ProjectsService } from './projects.service';
import { Project } from './projects/models/project.model';

@Injectable()
export class EnviromentProjectsService implements ProjectsService {
  static INDEX_NOT_FOUND = -1;
  findAll() {
    return of(environment.projects).pipe(delay(0));
  }
  filter(filter: Project) {
    return of(environment.projects.filter(this.constructFilter(filter))).pipe(delay(0));
  }
  find(filter: Project) {
    return of(environment.projects.find(this.constructFilter(filter))).pipe(delay(0));
  }
  findById(id: number) {
    return of(environment.projects.find(p => p.id === id)).pipe(delay(0));
  }
  add(project: Project) {
    project.id = this.getNextId();
    environment.projects.push({ ...project });
    return EMPTY;
  }
  delete(id: number) {
    environment.projects.splice(environment.projects.findIndex(p => p.id === id), 1);
    return EMPTY;
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
