import { combineReducers } from 'redux';
import menu from './menu';
import message from './message';
import session from './session';

const rootReducer = combineReducers({
  menu,
  message,
  session
});

export default rootReducer;
