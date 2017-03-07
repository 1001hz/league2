import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
// models
import { Login } from '../models/login.model';
import { User } from '../models/user.model';
import { League } from '../models/league.model';
// state
import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';
import { SET_USER, RESET_USER } from '../reducers/user.reducer';
import { ADD_LEAGUE } from '../reducers/leagues.reducer';
// services
import { ApiService } from './api.service';

interface AppState {
  user: User;
  league: League;
}

@Injectable()
export class AuthService {

  user: User;

  constructor(private store: Store<AppState>, private router: Router, private apiS: ApiService) {
    // get current logged in user
    store.select('user').subscribe(u => this.user = u );
  }

  /**
   * Check if user is logged in
   * @returns {boolean}
   */
  isLoggedIn() {
    if(this.user.id){
      return true;
    }
    return false;
  }

  /**
  * Create a new account
   */
  signup(newUser: User) {
    return this.apiS.postApi('/users', newUser, false).share();
  }

  /**
   * Login, set store with returned user, get extra user info, save extra info to store
   * @param credentials
   */
  login(credentials: Login) {

    // login
    var authenticate$ = this.apiS.postApi('/authenticate', credentials, false)
      .flatMap((response) => {

        // create user object from returned data
        var user = new User(
          response.user.id,
          null,
          response.user.info.firstName,
          response.user.info.lastName,
          null,
          response.user.avatar.small,
          response.token
        );

        // store user
        this.store.dispatch({ type: SET_USER, payload: user });

        // get extra user info
        return this.apiS.getApi('/users/'+user.id)
      })
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'))
      .share();


    // subscribe to observible to call it
    authenticate$.subscribe( user => {

      user.ownedLeagues.map(league => {
        // extract user's leagues from user data
        var _league = new League (league.id, league.name, null, null);

        // store user's league data (subset of full league data)
        this.store.dispatch({ type: ADD_LEAGUE, payload: _league });
      });

      // redirect to dashboard
      this.router.navigateByUrl('league');

    });

  }

  /**
   * Logout from server and clear store
   */
  logout() {

    //TODO: Sent logout request to server

    // clear store
    this.store.dispatch({ type: RESET_USER });

    // redirect to login page
    this.router.navigateByUrl('');
  }
}
