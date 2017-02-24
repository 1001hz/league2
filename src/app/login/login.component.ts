import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
// services
import { AuthService } from './auth.service';
// models
import { User } from '../models/user.model';
import { Login } from '../models/login.model';
// state
import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';

interface AppState {
  user: User;
}

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    providers: [AuthService]
})
export class LoginComponent {

  user: Observable<User>;
  model = new Login();

  constructor(private _authService: AuthService, private store: Store<AppState>){
    this.user = store.select('user');
  }

  onSubmit($event) {
    $event.preventDefault();
    this._authService.login(this.model);
  }

  onLogout() {
    this._authService.logout();
  }
}
