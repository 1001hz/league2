import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { League, leagueSingleModel } from '../../models/league.model';
import { Store } from '@ngrx/store';

interface AppState {
  user: League;
}

@Component({
  templateUrl: './league-item.component.html'
})
export class LeagueItemComponent{

  public league;

  constructor(private store: Store<AppState>, private route: ActivatedRoute) {
    this.league = store.select('leagues').let(leagueSingleModel(route.params['id']));
  }
}
