import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-dashboard-element',
  templateUrl: './dashboard-element.component.html',
  styleUrls: ['./dashboard-element.component.css']
})
export class DashboardElementComponent implements OnInit {
  @Input() buttonLabel: string;
  @Input() project: Project;
  @Output() buttonClick = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {}
}
