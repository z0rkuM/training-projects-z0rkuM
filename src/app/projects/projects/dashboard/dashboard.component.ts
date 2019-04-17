import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Project } from '../models/project.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
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
    // Con "long" dashboard mostramos 6 proyectos, si no mostramos 3
    this.max = this.long ? DashboardComponent.LONG : DashboardComponent.SHORT;
  }

  public min(a: number, b: number) {
    return a < b ? a : b;
  }
}
