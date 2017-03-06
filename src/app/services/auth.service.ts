import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
// models
import { Login } from '../models/login.model';
import { User } from '../models/user.model';
import { League } from '../models/league.model';
// state
import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';
import { SET, RESET } from '../reducers/user.reducer';
import { ADD } from '../reducers/leagues.reducer';

// debugging
import { AsyncSubject } from 'rxjs/Rx';

interface AppState {
  user: User;
}
interface LeagueAppState {
  league: League;
}

@Injectable()
export class AuthService {

  user: User;
  private apiUrl;

  constructor(private store: Store<AppState>, private leagueStore: Store<LeagueAppState>, private router: Router, private http: Http) {
    store.select('user').subscribe(u => this.user = u );
    this.apiUrl = 'http://188.166.240.71';
  }

  isLoggedIn() {
    if(this.user.id){
      return true;
    }
    return false;
  }

  signup(newUser: User) {
    // send data to server
    let bodyString = JSON.stringify(newUser); // Stringify payload
    let headers      = new Headers({ 'Content-Type': 'application/json' });
    let options       = new RequestOptions({ headers: headers });

    return this.http.post(this.apiUrl + '/users', bodyString, options)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error')).share();

  }

  login(credentials: Login) {
    // send data to server
    let credentialsString = JSON.stringify(credentials); // Stringify payload
    let headers      = new Headers({ 'Content-Type': 'application/json' });
    let options       = new RequestOptions({ headers: headers });

    var ob = this.http.post(this.apiUrl + '/authenticate', credentials, options)
      .flatMap((res:Response) => {
        var _res = res.json();
        var user = new User(
          _res.user.id,
          _res.user.email,
          _res.user.email,
          _res.user.email,
          null,
          _res.user.avatar.small,
          _res.token
        );
        this.store.dispatch({ type: SET, payload: user });

        let headers2      = new Headers({ 'Content-Type': 'application/json', 'X-Access-Token': user.token});
        let options2       = new RequestOptions({ headers: headers2 });
        return this.http.get(this.apiUrl + '/users/'+user.id, options2)
      })
      .map((res: Response) => {
        return res.json();
      })
      .catch((error:any) => Observable.throw(error.json().error || 'Server error')).share();


    ob.subscribe( _res => {

      _res.ownedLeagues.map( league => {
        var _league = new League (league.id, league.name, null, null);
        this.leagueStore.dispatch({ type: ADD, payload: _league });
      });

      this.router.navigateByUrl('league');

    } );
  }

  logout() {
    this.store.dispatch({ type: RESET });
    this.router.navigateByUrl('');
  }
}
