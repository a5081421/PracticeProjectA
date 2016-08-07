/**
* @file actions 管理
*/
import axios from 'axios';
import * as TYPE from './types';

const ROOT_URL = 'http://localhost:3000/api';

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

// axios 預設 Status code 若為 200 ~ 300 ， 會進到 .then()
// 其他的會進到 .catch()
export function fetchBoardLists() {
    return function(dispatch) {
        axios.get(`${ROOT_URL}/boards`)
        .then(response => {
            dispatch ({
                type: TYPE.FETCH_BOARD_LISTS,
                payload: response.data
            });
        })
        .catch((error) => {
            console.log("failed: ", error.response, error);
            dispatch(handleError(error.response,error));
        });
    }
}

export function handleError(error_response, error) {
    switch(error_response.status) {
        case 404:
            return {
                type: TYPE.ERROR_404,
                payload: error_response.statusText
            };
        default:
            return {
                type: TYPE.UNKNOW_ERROR,
                payload: error
            };
    }
}
