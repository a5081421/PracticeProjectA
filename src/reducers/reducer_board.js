/**
* @file Board reducer
*/
import * as TYPE from '../actions/types';

let INIT_STATE = {show:false, board_list:[]}


export default function(state=INIT_STATE, action) {
  switch(action.type) {
    case TYPE.FETCH_BOARD_LISTS:
        return {...state, board_list:action.payload }
    case TYPE.HANDLE_BOARD_MODAL:
        return {...state, show: action.payload};
    case TYPE.CREATE_BOARD:
        let board_list = state.board_list.concat(action.payload)
        return {...state, board_list }  // board_list:board_list 的意思
    case TYPE.ERROR_404:
        return {...state, error: action.payload }
    case TYPE.UNKNOW_ERROR:
        return {...state, error: action.payload } 
    default:
      return state;
  }
}
