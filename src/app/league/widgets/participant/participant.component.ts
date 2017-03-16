import { Component, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'participant',
  templateUrl: './participant.component.html'
})

export class ParticipantComponent{
  @Input() participant;
}
