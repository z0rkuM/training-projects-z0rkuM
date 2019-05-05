import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectsService } from '../../projects.service';
import { Project } from '../models/project.model';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {
  public project: Project;

  constructor(private router: Router, public location: Location, private projectsService: ProjectsService) {
    this.project = { id: null, name: '', effort: 1 };
  }

  ngOnInit() {}

  addProject() {
    this.projectsService.add(this.project).subscribe(np => {
      console.log(np);
      return this.router.navigateByUrl('/projects');
    });
  }
}
