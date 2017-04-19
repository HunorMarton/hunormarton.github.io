import * as types from '../constants/actionTypes';
import initialState from './initialState';


export default function tiltReducer(state = initialState.filter, action) {
  switch (action.type) {
    case types.FILTER: {
      return action.filter;
    }
    default:
      return state;
    }
}
