import { Component } from '@angular/core';

@Component({
  template: `
  <h1>League</h1>
  <nav>
      <a [routerLink]=" ['./'] "
        routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
        Index
      </a>
      <a [routerLink]=" ['./home'] "
        routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
        Home
      </a>
      <a [routerLink]=" ['./account'] "
        routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
        Account
      </a>
    </nav>
  <router-outlet></router-outlet>
  `
})

export class LeagueComponent {}
