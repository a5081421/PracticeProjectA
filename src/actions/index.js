/**
* @file actions 管理
*/

export const HANDLE_BOARD_MODAL = 'HANDLE_BOARD_MODAL';


export function handleBoardModal(show) {
  return {
    type: HANDLE_BOARD_MODAL,
    payload : show
  };
}
