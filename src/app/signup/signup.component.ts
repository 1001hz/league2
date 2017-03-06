import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs/Rx';
// services
import { AuthService } from '../services/auth.service';
// models
import { User } from '../models/user.model';


interface AppState {
  user: User;
}

@Component({
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  providers: [AuthService]
})
export class SignupComponent {

  model = new User();
  public isSuccessful;

  constructor(private _authService: AuthService){
    console.log(this.model);
  }

  onSignup($event) {
    $event.preventDefault();
    this.isSuccessful = this._authService.signup(this.model);
  }
}
