import { Component, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html'
})

export class MenuComponent{
  @Input() user;
  @Output() logout = new EventEmitter();
}
