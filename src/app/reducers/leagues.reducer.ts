import { ActionReducer, Action } from '@ngrx/store';
import { User } from '../models/user.model';

export const SET = 'SET';
export const RESET = 'RESET';

export function leaguesReducer(state: User = new User(), action: Action) {
  switch (action.type) {
    case SET:
      return Object.assign({}, state, action.payload );

    case RESET:
      return {};

    default:
      return state;
  }
}
