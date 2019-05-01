import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { finalize, map, share, tap } from 'rxjs/operators';
import { ProjectsService } from '../projects.service';
import { Project } from './models/project.model';

/**
 * Contenedor para la pantalla de proyectos.
 */
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects$: Observable<Project[]>;
  filter: Project;
  loading: boolean;
  changePage: any;
  length: number;
  defaultPageSize: number;

  constructor(private router: Router, private projectsService: ProjectsService) {
    this.filter = { id: null, name: '', effort: 1 };
    this.loading = true;
    this.changePage = null;
    this.length = 0;
    this.defaultPageSize = 5;
  }

  ngOnInit() {
    this.search(true, null);
  }

  /**
   * Borrado de un Project.
   * @param deletedId Identificador del proyecto para borrar.
   */
  deleteProject(deletedId: number) {
    this.projectsService.delete(deletedId).subscribe(_ => {
      this.search(true, this.changePage); // Para mantener estado de la tabla
    });
  }

  /**
   * Redirige a la pantalla de visualizar proyecto.
   * @param visitedId Identificador del proyecto a visualizar.
   */
  visitProject(visitedId: number) {
    this.router.navigateByUrl('/projects/' + visitedId);
  }

  /**
   * Reseteo del filtro de búsqueda.
   */
  private cleanFilter() {
    this.filter.id = null;
    this.filter.name = '';
  }

  /**
   * Realiza la búsqueda de proyectos cuando recibe true, si recibe false resetea la búsqueda.
   * @param doSearch Flag para decidir si se busca o se resetea.
   */
  search(doSearch: boolean, changePage: any) {
    this.loading = true;
    if (!doSearch) {
      this.cleanFilter();
    }

    this.changePage = changePage ? { ...changePage } : null;
    const nTake = changePage == null ? (this.changePage == null ? this.defaultPageSize : this.changePage) : changePage.pageSize;
    const nSkip = changePage == null ? 0 : changePage.pageIndex * changePage.pageSize;

    this.projects$ = this.projectsService.filter(this.filter).pipe(
      share(),
      tap(arr => (this.length = arr.length)),
      map(arr => {
        return arr.slice(nSkip, nSkip + nTake);
      }),
      finalize(() => (this.loading = false))
    );
  }
}
