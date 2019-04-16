import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Project } from '../models/project.model';

@Component({
  selector: 'app-filter-projects-form',
  templateUrl: './filter-projects-form.component.html'
})
export class FilterProjectsFormComponent implements OnInit {
  @Input() model: Project;
  @Output() search = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit() {}

  clean() {
    this.model.id = null;
    this.model.name = '';
    this.search.emit(false);
  }

  doSearch() {
    this.search.emit(true);
  }
}
