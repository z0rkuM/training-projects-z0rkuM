import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { count, finalize, map, share } from 'rxjs/operators';
import { ProjectsService } from '../../projects/projects.service';
import { Project } from '../../projects/projects/models/project.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  numProj: number;
  projects$: Observable<Project[]>;
  loading: boolean;

  constructor(private router: Router, private projectsService: ProjectsService) {
    this.loading = true;
  }

  ngOnInit() {
    this.projects$ = this.projectsService.findAll().pipe(
      share(),
      map(arr => (arr == null ? null : [...arr].reverse())),
      finalize(() => (this.loading = false))
    );
    this.projects$.pipe(count(x => x != null)).subscribe(result => (this.numProj = result));
  }

  visitProject(id: number) {
    this.router.navigateByUrl('/projects/' + id);
  }
}
