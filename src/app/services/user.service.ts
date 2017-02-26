import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
// models
import { User } from '../models/user.model';
// state
import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';
import { SET } from '../reducers/user.reducer';

interface AppState {
  user: User;
}

@Injectable()
export class UserService {

  user: User;

  constructor(private store: Store<AppState>, public http: Http) {
  }

  update(user: User) {
    // send data to server
    console.log(user);

    // set user in app data store
    this.store.dispatch({ type: SET, payload: user });
  }
}
