import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { Project } from './models/project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: any[];
  emptyDB: boolean;
  filter: Project;

  constructor(private router: Router) {
    this.filter = { id: null, name: '' };
  }

  ngOnInit() {
    this.projects = environment.projects;
    this.isEmptyDB();
  }

  private isEmptyDB() {
    this.emptyDB = environment.projects.length === 0;
  }

  deleteProject(deletedId: number) {
    environment.projects.splice(environment.projects.findIndex(p => p.id === deletedId), 1);
    this.isEmptyDB();
    this.doSearch(); // Para mantener estado de la tabla
  }
  visitProject(visitedId: number) {
    this.router.navigateByUrl('/projects/' + visitedId);
  }

  doSearch() {
    this.projects = environment.projects.filter(
      p =>
        (this.filter.id == null || this.filter.id === p.id) &&
        (this.filter.name === '' || p.name.toLowerCase().indexOf(this.filter.name.toLowerCase()) !== -1)
    );
  }
}
