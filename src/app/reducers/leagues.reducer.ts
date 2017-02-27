import { ActionReducer, Action } from '@ngrx/store';
import { League } from '../models/league.model';

export const ADD = 'ADD';

let initialState = [];
let l = new League(
  1, "Just a test league", 14, "1488193876"
);
initialState.push(l);

export function leaguesReducer(state: Array<League> = initialState, action: Action) {
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

export const leagueSummaryModel = () => {
  return state => state
    .map((leagues) => {
      return leagues.map( l => {
        l.test = '2 days';
        return l;
      });
    })
};
