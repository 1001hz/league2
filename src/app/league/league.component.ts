import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from '../models/user.model';
// services
import { AuthService } from '../services/auth.service';

interface AppState {
  user: User;
}

@Component({
  template: `
  <menu [user]="user | async" (logout)="onLogout($event)"></menu>
  <router-outlet></router-outlet>
  `,
  providers: [AuthService]
})

export class LeagueComponent {

  public user;

  constructor(private store: Store<AppState>, private _authService: AuthService) {
    this.user = store.select('user');
  }

  onLogout() {
    this._authService.logout();
  }
}
