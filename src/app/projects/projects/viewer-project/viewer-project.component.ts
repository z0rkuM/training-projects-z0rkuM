import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { Project } from '../models/project.model';

@Component({
  selector: 'app-viewer-project',
  templateUrl: './viewer-project.component.html',
  styleUrls: ['./viewer-project.component.css']
})
export class ViewerProjectComponent implements OnInit {
  projectId: number;
  project: Project;

  constructor(activateRoute: ActivatedRoute) {
    this.projectId = +activateRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.project = environment.projects.find(p => p.id === this.projectId);
  }
}
