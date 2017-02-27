import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { routes } from './league.routes';
import { LeagueComponent } from './league.component';
import { DashboardComponent } from './dashboard';
import { AddComponent } from './add';
import { JoinComponent } from './join';
import { LeagueItemComponent } from './league-item';
import { MenuComponent } from './widgets/menu';
import { ProfileComponent } from './widgets/profile';
import { AuthService } from '../services/auth.service';
import { LeagueService } from '../services/league.service';
import { LeagueSummaryComponent } from './widgets/league-summary';

@NgModule({
  declarations: [
    // Components / Directives/ Pipes
    LeagueComponent,
    DashboardComponent,
    AddComponent,
    JoinComponent,
    MenuComponent,
    LeagueItemComponent,
    ProfileComponent,
    LeagueSummaryComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    AuthService,
    LeagueService
  ]
})
export class LeagueModule {}
