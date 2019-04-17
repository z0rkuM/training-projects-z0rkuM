import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectsService } from '../../projects/projects.service';
import { Project } from '../../projects/projects/models/project.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  numProj: number;
  projects: Project[];

  constructor(private router: Router, private projectsService: ProjectsService) {}

  ngOnInit() {
    this.projects = this.projectsService.findAll();
    this.numProj = this.projects.length;
  }

  visitProject(id: number) {
    this.router.navigateByUrl('/projects/' + id);
  }
}
