import {NgModule, Component} from '@angular/core';
import {RouterModule} from '@angular/router';
import {routes} from './league.routes';
import {LeagueComponent} from './league.component';
import {HomeComponent} from './home';

@NgModule({
  declarations: [
    // Components / Directives/ Pipes
    LeagueComponent,
    HomeComponent
  ],
  imports: [RouterModule.forChild(routes)]
})
export class LeagueModule {}
