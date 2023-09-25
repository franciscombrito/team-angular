import { Component, OnInit } from '@angular/core';
import { Project } from '@app/core/models/project.model';
import { TeamService } from '@app/core/services/team.service';
import { Observable, of } from 'rxjs';

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
