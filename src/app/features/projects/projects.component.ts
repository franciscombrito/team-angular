import { Component, OnInit } from '@angular/core';

import { Observable, of } from 'rxjs';
import { Project } from '../../core/models/project.model';
import { TeamService } from 'src/app/core/services/team.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  projects$: Observable<Project[]> = of([]);
  constructor(private teamService: TeamService) {}

  ngOnInit(): void {
    this.projects$ = this.teamService.getProjects();
  }
}
