/**
* @file reducer 資源管理
*/
import { combineReducers } from 'redux';
import BoardReducer from './reducer_board';

const rootReducer = combineReducers({
  //state: (state = {}) => state
  boards : BoardReducer,
});

export default rootReducer;
