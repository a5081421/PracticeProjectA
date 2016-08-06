/**
* @file Board reducer
*/

import { HANDLE_BOARD_MODAL } from '../actions/index';

const INIT_STATE = {show:false, board_list:[
  { title: 'Javascript: The Good Parts', color: '#00AECC' },
  { title: 'Harry Potter', color: '#4D4D4D' },
  { title: 'The Dark Tower', color: "#0079BF" },
  { title: 'Eloquent Ruby', color: '#4BBF6B' }
]}


export default function(state=INIT_STATE, action) {
  console.log("action", state)
  switch(action.type) {
    case HANDLE_BOARD_MODAL:
      return {...state, show: action.payload};;
    default:
      return state;
  }
}
