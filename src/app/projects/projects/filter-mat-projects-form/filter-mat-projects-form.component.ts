import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Project } from '../models/project.model';

@Component({
  selector: 'app-filter-mat-projects-form',
  templateUrl: './filter-mat-projects-form.component.html',
  styleUrls: ['./filter-mat-projects-form.component.css']
})
export class FilterMatProjectsFormComponent {
  @Input() model: Project;
  @Output() search = new EventEmitter<boolean>();
  filterForm = this.fb.group({
    id: null,
    name: ''
  });

  constructor(private fb: FormBuilder) {}

  updateModel() {
    this.model.id = this.filterForm.get('id').value;
    this.model.name = this.filterForm.get('name').value;
  }

  triggerSearch(search: boolean) {
    if (!search) {
      this.filterForm.get('id').setValue(null);
      this.filterForm.get('name').setValue('');
    }
    this.updateModel();
    this.search.emit(search);
  }
}
