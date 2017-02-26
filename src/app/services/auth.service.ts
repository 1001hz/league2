import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
// models
import { Login } from '../models/login.model';
import { User } from '../models/user.model';
// state
import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';
import { SET, RESET } from '../reducers/user.reducer';

// debugging
import { AsyncSubject } from 'rxjs/Rx';

interface AppState {
  user: User;
}

@Injectable()
export class AuthService {

  user: User;

  constructor(private store: Store<AppState>, private router: Router) {
    store.select('user').subscribe(u => this.user = u );
  }

  isLoggedIn() {
    if(this.user.id){
      return true;
    }
    return false;
  }

  signup(newUser: User) {
    // send data to server
    console.log("Adding new user: " + newUser);
    let debugging = new AsyncSubject();
    debugging.next(true);
    debugging.complete();
    return debugging;
  }

  login(credentials: Login) {
    // send data to server
    console.log("Logging in with: " + credentials);

    // set user in app data store
    var user = new User(1, credentials.username, credentials.username, credentials.username);
    this.store.dispatch({ type: SET, payload: user });

    // redirect to home
    this.router.navigateByUrl('league');
  }

  logout() {
    this.store.dispatch({ type: RESET });
    this.router.navigateByUrl('');
  }
}
