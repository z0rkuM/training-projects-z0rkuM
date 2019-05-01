import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-new-mat-project-form',
  templateUrl: './new-mat-project-form.component.html',
  styleUrls: ['./new-mat-project-form.component.css']
})
export class NewMatProjectFormComponent {
  @Input() model: Project;
  @Output() save = new EventEmitter<void>();

  projectForm = this.fb.group({
    name: [null, Validators.required],
    effort: [1]
  });

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    this.model.name = this.projectForm.get('name').value;
    this.model.effort = this.projectForm.get('effort').value;
    this.save.emit();
  }
}
