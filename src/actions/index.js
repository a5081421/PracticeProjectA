/**
* @file actions 管理
*/
import * as TYPE from './types';

export function handleBoardModal(show) {
  return {
    type: TYPE.HANDLE_BOARD_MODAL,
    payload : show
  };
}

export function createBoard(props) {
    return {
        type: TYPE.CREATE_BOARD,
        payload : props
    };
}

export function fetchBoardLists() {

    let board_list = [
      { title: 'Javascript1: The Good Parts', color: '#00AECC' },
      { title: 'Harry Potter', color: '#4D4D4D' },
      { title: 'The Dark Tower', color: "#0079BF" },
      { title: 'Eloquent Ruby', color: '#4BBF6B' }
    ]
    return {
        type: TYPE.FETCH_BOARD_LISTS,
        payload: board_list
    };
}
