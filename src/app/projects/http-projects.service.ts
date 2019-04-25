import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { ProjectsService } from './projects.service';
import { Project } from './projects/models/project.model';

@Injectable()
export class HttpProjectsService implements ProjectsService {
  static INDEX_NOT_FOUND = -1;
  constructor(private http: HttpClient) {}
  findAll() {
    return this.http.get<Project[]>(environment.projectsApi.url).pipe(
      map(this.fixIds.bind(this) as (arr: any[]) => any[]),
      delay(environment.projectsApi.delay)
    );
  }
  filter(filter: Project) {
    return this.findAll().pipe(map(arr => (arr == null ? null : arr.filter(this.constructFilter(filter)))));
  }
  find(filter: Project) {
    return this.findAll().pipe(map(arr => (arr == null ? null : arr.find(this.constructFilter(filter)))));
  }
  findById(id: number) {
    const url = environment.projectsApi.url + '/' + id;
    return this.http.get<Project>(url).pipe(
      map(this.fixId),
      delay(environment.projectsApi.delay)
    );
  }
  add(project: Project) {
    return this.http.post(environment.projectsApi.url, project);
  }
  delete(id: number) {
    const url = environment.projectsApi.url + '/' + id;
    return this.http.delete<Project>(url);
  }
  private constructFilter(filter: Project) {
    return (p: Project) =>
      (filter.id == null || (filter.id as number) == p.id) &&
      (filter.name === '' || p.name.toLowerCase().indexOf(filter.name.toLowerCase()) !== HttpProjectsService.INDEX_NOT_FOUND);
  }
  private fixIds(arr: any[]) {
    if (arr != null) {
      arr.forEach(this.fixId);
    }

    return arr;
  }
  private fixId(element: any) {
    element['id'] = element['_id'];
    delete element['_id'];
    return element;
  }
}
