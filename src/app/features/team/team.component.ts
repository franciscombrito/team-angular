import { Component, OnInit } from '@angular/core';

import { Observable, of } from 'rxjs';
import { Developer } from '../../core/models/developer.model';
import { TeamService } from '../../core/services/team.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
})
export class TeamComponent implements OnInit {
  team$: Observable<Developer[]> = of([]);

  constructor(private teamService: TeamService) {}

  ngOnInit(): void {
    this.team$ = this.teamService.getTeam();
  }
}
