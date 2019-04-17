import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-viewer-project-form',
  templateUrl: './viewer-project-form.component.html'
})
export class ViewerProjectFormComponent implements OnInit {
  @Input() model: Project;
  @Input() toUppercase: boolean;
  constructor() {}

  ngOnInit() {}
}
