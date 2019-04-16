import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Project } from '../models/project.model';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit {
  @Input() projects: Project[];
  @Output() visit = new EventEmitter<Project>();
  @Output() delete = new EventEmitter<Project>();
  constructor() {}

  ngOnInit() {}
}
