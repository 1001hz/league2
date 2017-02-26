import { ActionReducer, Action } from '@ngrx/store';
import { League } from '../models/league.model';

export const ADD = 'ADD';

export function leaguesReducer(state: Array<League> = [], action: Action) {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        Object.assign({}, action.payload)
      ];

    default:
      return state;
  }
}
