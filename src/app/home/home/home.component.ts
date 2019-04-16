import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { Project } from '../../projects/projects/models/project.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  numProj: number;
  projects: Project[];

  constructor(private router: Router) {}

  ngOnInit() {
    this.numProj = environment.projects.length;
    this.projects = environment.projects;
  }

  visitProject(id: number) {
    this.router.navigateByUrl('/projects/' + id);
  }
}
