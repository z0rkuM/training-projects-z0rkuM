import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-new-project-form',
  templateUrl: './new-project-form.component.html'
})
export class NewProjectFormComponent implements OnInit {
  @Input() model: Project;
  constructor() {}

  ngOnInit() {}
}
