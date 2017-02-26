import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';
import { League } from '../../models/league.model';

interface AppState {
  leagues: Array<League>;
}
@Component({
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent{

  leagues: Observable<Array<League>>;

  constructor( private store: Store<AppState>) {
    this.leagues = store.select('leagues');
  }
}
