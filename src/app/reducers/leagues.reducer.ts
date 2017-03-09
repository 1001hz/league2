import { ActionReducer, Action } from '@ngrx/store';
import { League } from '../models/league.model';

export const ADD_LEAGUE = 'ADD_LEAGUE';
export const UPDATE_LEAGUE = 'UPDATE_LEAGUE';

let initialState = [];

export function leaguesReducer(state: Array<League> = initialState, action: Action) {
  switch (action.type) {
    case ADD_LEAGUE:
      return [
        ...state,
        Object.assign({}, action.payload)
      ];

    case UPDATE_LEAGUE:
      return Object.assign([], state,
      state.map( leagueItem => {
        if(action.payload.id === leagueItem.id) {
          return Object.assign(new League(), action.payload);
        }
      })
    );

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

export const leagueSingleModel = (leagueId) => {
  return state => state
    .map((leagues) => {
      return leagues.filter( l => {
        if(l.id === leagueId) {
          return l;
        }
      });
    })
};
