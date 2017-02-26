import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
// services
import { UserService } from '../../services/user.service';
// models
import { User } from '../../models/user.model';
// state
import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';

interface AppState {
  user: User;
}

@Component({
  templateUrl: './account.component.html',
  providers: [UserService]
})

export class AccountComponent {
  public model = new User();
  constructor(private _userService: UserService, private store: Store<AppState>){

    store.select('user').subscribe( u => this.model = Object.assign({}, u ) );
  }

  onSubmit($event) {
    $event.preventDefault();
    this._userService.update(this.model);
  }
}
