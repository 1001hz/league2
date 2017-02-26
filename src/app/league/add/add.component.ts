import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { League } from '../../models/league.model';
import { LeagueService } from '../../services/league.service';

interface AppState {
  league: League;
}

@Component({
  templateUrl: './add.component.html',
  providers: [LeagueService]
})
export class AddComponent{
  model = new League;

  constructor(private _leagueService: LeagueService){

  }

  onSave($event) {
    $event.preventDefault();
    this._leagueService.addNewLeague(this.model);
  }

}
