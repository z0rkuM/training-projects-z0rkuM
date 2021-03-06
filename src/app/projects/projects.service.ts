import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProjectsService } from './projects-service.interface';
import { Project } from './projects/models/project.model';

@Injectable()
export class ProjectsService implements IProjectsService {
  findAll: () => Observable<Project[]>;
  filter: (filter: Project) => Observable<Project[]>;
  find: (filter: Project) => Observable<Project>;
  findById: (id: number) => Observable<Project>;
  add: (project: Project) => Observable<any>;
  delete: (id: number) => Observable<any>;
  constructor() {}
}
