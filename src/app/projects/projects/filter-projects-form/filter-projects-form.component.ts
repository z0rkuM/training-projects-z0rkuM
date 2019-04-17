import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Project } from '../models/project.model';

/**
 * Presentador de la búsqueda de proyectos.
 */
@Component({
  selector: 'app-filter-projects-form',
  templateUrl: './filter-projects-form.component.html',
  styleUrls: ['./filter-projects-form.component.css']
})
export class FilterProjectsFormComponent implements OnInit {
  /**
   * Modelo de tipo Project que representa el filtro por el que buscamos.
   */
  @Input() model: Project;

  /**
   * Si se devuelve true hemos realizado una búsqueda, si false limpiamos formulario.
   */
  @Output() search = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit() {}
}
