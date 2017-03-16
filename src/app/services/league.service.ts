import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
// models
import { League } from '../models/league.model';
import { User } from '../models/user.model';
// state
import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';
import { ADD_LEAGUE, UPDATE_LEAGUE } from '../reducers/leagues.reducer';
// services
import { ApiService } from './api.service';

interface AppState {
  leagues: Array<League>;
}

@Injectable()
export class LeagueService {

  private apiUrl;

  constructor(
    private store: Store<AppState>,
    public apiS: ApiService,
    private router: Router
  ) {
  }

  getLeagueById(id: string) {
    return this.apiS.getApi('/leagues/'+id)
      .map( (league) => {
        var _league = new League();
        _league.makeFromServer(league);

        this.store.dispatch({ type: UPDATE_LEAGUE, payload: _league });

        return _league;
      })
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  addNewLeague(league: League) {
    // send data to server
    console.log(league);

    league.id = "test";

    // set in app data store
    this.store.dispatch({ type: ADD_LEAGUE, payload: league });

    this.router.navigateByUrl('league');
  }
}
