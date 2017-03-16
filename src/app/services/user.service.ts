import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
// models
import { User } from '../models/user.model';
// state
import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';
import { SET_USER } from '../reducers/user.reducer';
// services
import { ApiService } from './api.service';

interface AppState {
  user: User;
}

@Injectable()
export class UserService {

  user: User;

  constructor(private store: Store<AppState>, private apiS: ApiService) {
    store.select('user').subscribe( (u:User) => this.user = u );

  }

  update(user: User) {
    // send data to server
    console.log(user);

    // set user in app data store
    this.store.dispatch({ type: SET_USER, payload: user });
  }

  updateAvatar(formData:FormData) {
    return this.apiS.postFileApi('/users/'+this.user.id+'/avatar', formData);
  }
}
