import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment.prod';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: any[];
  constructor() {}

  ngOnInit() {
    this.projects = environment.projects;
  }
}
