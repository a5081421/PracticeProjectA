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
