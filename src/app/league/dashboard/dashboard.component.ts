import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';
import { League } from '../../models/league.model';
import { leagueSummaryModel } from '../../reducers/leagues.reducer';
import { ActivatedRoute } from '@angular/router';

interface AppState {
  leagues: Array<League>;
}
@Component({
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit{

  leagues: Observable<Array<League>>;

  constructor( private store: Store<AppState>, private route: ActivatedRoute) {
    this.leagues = store.select('leagues').let(leagueSummaryModel());
  }

  ngOnInit() {
    var test = this.route.snapshot.data['leagues'];
    console.log(test);
  }
}
