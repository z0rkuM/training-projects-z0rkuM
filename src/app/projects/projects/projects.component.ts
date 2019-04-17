import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  projects: Project[];
  emptyDB: boolean;
  filter: Project;

  constructor(private router: Router, private projectsService: ProjectsService) {
    this.filter = { id: null, name: '' };
  }

  ngOnInit() {
    this.projects = this.projectsService.findAll();
    this.emptyDB = this.projects.length === 0;
  }

  /**
   * Borrado de un Project.
   * @param deletedId Identificador del proyecto para borrar.
   */
  deleteProject(deletedId: number) {
    this.projectsService.delete(deletedId);
    this.emptyDB = this.projectsService.findAll().length === 0;
    this.search(true); // Para mantener estado de la tabla
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
  search(doSearch: boolean) {
    if (!doSearch) {
      this.cleanFilter();
    }
    this.projects = this.projectsService.filter(this.filter);
  }
}
