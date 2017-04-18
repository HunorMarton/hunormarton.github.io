import * as types from '../constants/actionTypes';

export function filter(filter) {
  return {
    type: types.FILTER,
    filter
  };
}
