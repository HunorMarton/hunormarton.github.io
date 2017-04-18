import { combineReducers } from 'redux';
import filter from './filterReducer';

const rootReducer = combineReducers({
  filter
});

export default rootReducer;
