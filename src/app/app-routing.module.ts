import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamComponent } from './features/team/team.component';
import { TechRadarComponent } from './features/tech-radar/tech-radar.component';
import { ProjectsComponent } from './features/projects/projects.component';

const routes: Routes = [
  { path: '', component: TeamComponent },
  { path: 'tech-radar', component: TechRadarComponent },
  { path: 'projects', component: ProjectsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
