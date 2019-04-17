import { Project } from './projects/models/project.model';

export interface IProjectsService {
  findAll: () => Project[];
  filter: (filter: Project) => Project[];
  find: (filter: Project) => Project;
  findById: (id: number) => Project;
  add: (project: Project) => void;
  delete: (id: number) => void;
}
