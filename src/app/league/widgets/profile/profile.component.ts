import { Component, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html'
})

export class ProfileComponent{
  @Input() user;
}
