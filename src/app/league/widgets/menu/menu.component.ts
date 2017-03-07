import { Component, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent{
  @Input() user;
  @Output() logout = new EventEmitter();
  accountMenuOpen: boolean = false;
  leagueMenuOpen: boolean = false;

  onToggleAccountMenu() {
    this.accountMenuOpen = !this.accountMenuOpen;
    this.leagueMenuOpen = false;
  }

  onToggleLeagueMenu() {
    this.leagueMenuOpen = !this.leagueMenuOpen;
    this.accountMenuOpen = false;
  }
}
