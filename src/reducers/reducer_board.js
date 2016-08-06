/**
* @file Board reducer
*/
import * as TYPE from '../actions/types';

const INIT_STATE = {show:false, board_list:[
  { title: 'Javascript: The Good Parts', color: '#00AECC' },
  { title: 'Harry Potter', color: '#4D4D4D' },
  { title: 'The Dark Tower', color: "#0079BF" },
  { title: 'Eloquent Ruby', color: '#4BBF6B' }
]}


export default function(state=INIT_STATE, action) {
  switch(action.type) {
    case TYPE.HANDLE_BOARD_MODAL:
      return {...state, show: action.payload};
    case TYPE.CREATE_BOARD:
        let board_list = state.board_list.concat(action.payload)
        return {...state, board_list }  // board_list:board_list 的意思
    default:
      return state;
  }
}
