import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
// models
import { League } from '../models/league.model';
import { User } from '../models/user.model';
// state
import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';
import { ADD_LEAGUE } from '../reducers/leagues.reducer';

interface AppState {
  leagues: Array<League>;
}

@Injectable()
export class LeagueService {

  private apiUrl;

  constructor(
    private store: Store<AppState>,
    public http: Http,
    private router: Router
  ) {
    this.apiUrl = 'http://188.166.240.71';
  }

  getMyLeagues(user: User) {

    let headers      = new Headers({ 'Content-Type': 'application/json', 'X-Access-Token': user.token});
    let options       = new RequestOptions({ headers: headers });

    return this.http.get(this.apiUrl + '/leagues', options)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error')).share();
  }

  addNewLeague(league: League) {
    // send data to server
    console.log(league);

    league.id = 1;

    // set in app data store
    this.store.dispatch({ type: ADD_LEAGUE, payload: league });

    this.router.navigateByUrl('league');
  }
}
