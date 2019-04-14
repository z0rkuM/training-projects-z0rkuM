import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { Project } from '../models/project.model';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {
  public project: Project;

  constructor(private router: Router) {
    this.project = { id: null, name: '' };
  }

  ngOnInit() {}

  addProject() {
    this.project.id = this.getNextId();
    environment.projects.push({ ...this.project });
    this.router.navigateByUrl('/projects');
  }

  private getNextId(): number {
    let max = -1;
    environment.projects.forEach(p => (max = max < p.id ? p.id : max));
    return max + 1;
  }
}
