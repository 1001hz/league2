import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { League } from '../../models/league.model';
import { leagueSingleModel } from '../../reducers/leagues.reducer';
import { Store } from '@ngrx/store';

interface AppState {
  league: League;
}

@Component({
  templateUrl: './league-item.component.html'
})
export class LeagueItemComponent implements OnInit{

  public league;

  constructor(private store: Store<AppState>, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.store.select('leagues').let(leagueSingleModel(params['id'])).subscribe( l => this.league = l);
    });
  }
}
