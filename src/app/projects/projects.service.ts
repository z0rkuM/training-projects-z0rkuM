import { Injectable } from '@angular/core';
import { IProjectsService } from './projects-service.interface';
import { Project } from './projects/models/project.model';

@Injectable()
export class ProjectsService implements IProjectsService {
  findAll: () => Project[];
  filter: (filter: Project) => Project[];
  find: (filter: Project) => Project;
  findById: (id: number) => Project;
  add: (project: Project) => void;
  delete: (id: number) => void;
  constructor() {}
}
