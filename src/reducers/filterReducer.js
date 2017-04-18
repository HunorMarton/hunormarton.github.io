import * as types from '../constants/actionTypes';
import * as techs from '../constants/techTypes';
import initialState from './initialState';


export default function tiltReducer(state = initialState.filter, action) {
  switch (action.type) {
    case types.FILTER: {
      if(action.filter === techs.HTML) {
        return '';
      }
      return action.filter;
    }
    default:
      return state;
    }
}
