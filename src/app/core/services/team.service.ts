import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Developer } from '../models/team.model';
import { Project } from '../models/project.model';
import { shuffleTeam } from '../helpers/team.helper';

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  constructor(private http: HttpClient) {}

  getTeam() {
    return this.http
      .get(`${environment.baseAPI}/team`)
      .pipe(map((t) => shuffleTeam(t as Developer[]))) as Observable<
      Developer[]
    >;
  }

  getProjects() {
    return this.http.get(`${environment.baseAPI}/projects`) as Observable<
      Project[]
    >;
  }
}
