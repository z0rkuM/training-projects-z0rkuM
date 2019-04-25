import { Observable } from 'rxjs';
import { Project } from './projects/models/project.model';

export interface IProjectsService {
  findAll: () => Observable<Project[]>;
  filter: (filter: Project) => Observable<Project[]>;
  find: (filter: Project) => Observable<Project>;
  findById: (id: number) => Observable<Project>;
  add: (project: Project) => Observable<any>;
  delete: (id: number) => Observable<any>;
}
