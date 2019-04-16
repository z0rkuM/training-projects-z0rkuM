import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Project } from '../models/project.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  static LONG = 6;
  static SHORT = 3;

  @Input() long: boolean;
  @Input() buttonLabel: string;
  @Input() projects: Project[];
  @Output() buttonClick = new EventEmitter<number>();

  max: number;

  constructor() {}

  ngOnInit() {
    this.max = this.long ? DashboardComponent.LONG : DashboardComponent.SHORT;
  }

  public min(a, b) {
    return a < b ? a : b;
  }
}
