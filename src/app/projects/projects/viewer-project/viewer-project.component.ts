import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { ProjectsService } from '../../projects.service';
import { Project } from '../models/project.model';

@Component({
  selector: 'app-viewer-project',
  templateUrl: './viewer-project.component.html',
  styleUrls: ['./viewer-project.component.css']
})
export class ViewerProjectComponent implements OnInit {
  projectId: number;
  project$: Observable<Project>;
  loading: boolean;

  constructor(private activateRoute: ActivatedRoute, public location: Location, private projectsService: ProjectsService) {
    this.projectId = +activateRoute.snapshot.params['id'];
    this.loading = true;
  }

  ngOnInit() {
    this.project$ = this.projectsService.findById(this.projectId).pipe(finalize(() => (this.loading = false)));
  }
}
