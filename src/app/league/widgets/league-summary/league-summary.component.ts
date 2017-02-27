import { Component, Input } from '@angular/core';

@Component({
  selector: 'league-summary',
  templateUrl: './league-summary.component.html',
  styleUrls: ['./league-summary.component.scss']
})

export class LeagueSummaryComponent{
  @Input() league;
}
