import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Project } from '../models/project.model';

/**
 * Presentador de la lista de proyectos encontrados.
 */
@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html'
})
export class ProjectsListComponent implements OnInit {
  /**
   * Lista de Project a visualizar.
   */
  @Input() projects: Project[];
  /**
   * Emite el Project en el que pinchamos para visualizar.
   */
  @Output() visit = new EventEmitter<Project>();
  /**
   * Emite el Project en el que pinchamos para borrar.
   */
  @Output() delete = new EventEmitter<Project>();
  constructor() {}

  ngOnInit() {}
}
