import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Project } from '../models/project.model';

/**
 * Presentador de la lista de proyectos encontrados.
 */
@Component({
  styleUrls: ['./projects-list.component.css'],
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html'
})
export class ProjectsListComponent implements OnInit {
  constructor() {}
  /**
   * Lista de Project a visualizar.
   */
  @Input() projects: Project[];
  @Input() pageIndex: number;
  @Input() pageSize: number;
  @Input() length: number;
  displayedColumns: string[] = ['identificador', 'nombre', 'esfuerzo', 'opciones'];

  /**
   * Emite el Project en el que pinchamos para visualizar.
   */
  @Output() visit = new EventEmitter<Project>();
  /**
   * Emite el Project en el que pinchamos para borrar.
   */
  @Output() delete = new EventEmitter<Project>();

  /**
   * Emite un evento para indicar el cambio de página
   */
  @Output() page = new EventEmitter<any>();

  ngOnInit() {}

  doPage(changePage: any) {
    this.page.emit(changePage);
  }
}
