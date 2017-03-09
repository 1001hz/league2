import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { LeagueService } from '../services/league.service';
import { League } from '../models/league.model';
import { User } from '../models/user.model';
import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';

interface AppState {
  user: User;
}

@Injectable()
export class LeagueResolve implements Resolve<any> {

  constructor(private leagueService: LeagueService, private store: Store<AppState>) {

  }

  resolve(route: ActivatedRouteSnapshot) {
    return this.leagueService.getLeagueById(route.params['id']);
    //return this.store.select('user').mergeMap( user => {
    //  return this.leagueService.getLeague(user);
    //});
  }
}
