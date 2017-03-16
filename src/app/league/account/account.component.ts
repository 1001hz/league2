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
  public model;
  constructor(private _userService: UserService, private store: Store<AppState>){

    store.select('user').subscribe( (u) => {
      //this.model = Object.assign({}, u );
      console.log(u);
      this.model = u;
    } );
  }

  onSubmit($event) {
    $event.preventDefault();
    this._userService.update(this.model);
  }

  fileChange(event) {
    let fileList: FileList = event.target.files;
    if(fileList.length > 0) {
      let file: File = fileList[0];
      let formData:FormData = new FormData();
      formData.append('avatar', file, file.name);
      this._userService.updateAvatar(formData)
        .subscribe(
          data => console.log('success'),
          error => console.log(error)
      );
    }
  }
}
