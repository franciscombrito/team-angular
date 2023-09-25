import { Component, OnInit } from '@angular/core';
import { Developer } from '@app/core/models/developer.model';
import { TeamService } from '@app/core/services/team.service';
import { Observable, of } from 'rxjs';

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
