/**
* @file reducer 資源管理
*/
import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import BoardReducer from './reducer_board';

const rootReducer = combineReducers({
  //state: (state = {}) => state
  boards : BoardReducer,
  form,
});

export default rootReducer;
