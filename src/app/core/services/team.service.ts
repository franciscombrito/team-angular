import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

import { Developer } from '../models/developer.model';
import { Project } from '../models/project.model';
import { shuffleTeam } from '../helpers/team.helper';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  constructor(private http: HttpClient) {}

  getTeam() {
    return this.http
      .get<Developer[]>(`${environment.baseAPI}/team`)
      .pipe(map((t) => shuffleTeam(t)));
  }

  getProjects() {
    return this.http.get<Project[]>(`${environment.baseAPI}/projects`);
  }
}
