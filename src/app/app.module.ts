import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shell/header/header.component';
import { FooterComponent } from './shell/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { TeamComponent } from './features/team/team.component';
import { CardComponent } from './shared/card/card.component';
import { ProjectsComponent } from './features/projects/projects.component';
import { TechRadarComponent } from './features/tech-radar/tech-radar.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, TeamComponent, CardComponent, ProjectsComponent, TechRadarComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
