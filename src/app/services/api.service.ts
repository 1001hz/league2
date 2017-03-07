import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Store } from '@ngrx/store';
import { User } from '../models/user.model';
import { Observable } from 'rxjs/Rx';

interface AppState {
  user: User;
}

@Injectable()
export class ApiService {

  private headers: Headers;
  private token: string;
  private apiUrl: string;

  constructor(private store: Store<AppState>, public http: Http) {

    this.headers = new Headers({ 'Content-Type': 'application/json' });

    // get user for API token parameter
    store.select('user').subscribe(u => this.token = u.token );

    this.apiUrl = 'http://188.166.240.71';
  }

  getApi(endpoint, isPrivate:boolean = true) {

    if(isPrivate && this.token) {
      // protected routes need token
      this.headers.append('X-Access-Token', this.token);
    }

    let options = new RequestOptions({ headers: this.headers });

    return this.http.get(this.apiUrl + endpoint, options)
      .map((res:Response) => res.json())
      .catch( error => Observable.throw(error.json().message || 'Server error'));
  }

  postApi(endpoint, data, isPrivate:boolean = true) {

    if(isPrivate && this.token) {
      // protected routes need token
      this.headers.append('X-Access-Token', this.token);
    }

    let payload = JSON.stringify(data); // Stringify payload

    let options = new RequestOptions({ headers: this.headers });
    return this.http.post(this.apiUrl + endpoint, payload, options)
      .map((res:Response) => res.json())
      .catch( error => Observable.throw(error.json().message || 'Server error'));
  }
}
