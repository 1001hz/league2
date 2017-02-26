import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
// models
import { League } from '../models/league.model';
// state
import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';
import { ADD } from '../reducers/leagues.reducer';

interface AppState {
  leagues: Array<League>;
}

@Injectable()
export class LeagueService {

  constructor(
    private store: Store<AppState>,
    public http: Http,
    private router: Router
  ) {
  }

  addNewLeague(league: League) {
    // send data to server
    console.log(league);

    league.id = 1;

    // set in app data store
    this.store.dispatch({ type: ADD, payload: league });

    this.router.navigateByUrl('league');
  }
}
