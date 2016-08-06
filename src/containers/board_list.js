/**
* @file 產生Board列表
*/
import React, { Component } from 'react';
import { connect } from 'react-redux';

import BoardListItemAddComponent from '../containers/board_list_item_add';

class BoardList extends Component {

  renderList() {
    console.log("in board list", this.props)
    return this.props.board_list.map((board) => {
      return (
        <li
          key={board.title}
          className="boards-page-board-section-list-item">
          <a className="board-title" style={{backgroundColor:board.color}}>
            <span className="board-title-details-name" >
                {board.title}
            </span>
          </a>
        </li>
      );
    });
  }

  render(){
    return (
      <ul className="boards-page-board-section-list">
        {this.renderList()}
        <BoardListItemAddComponent />
      </ul>
    );
  }
}

/**
* @function mapStateToProps
* @param state {Object} 狀態
* @type Object
*/
function mapStateToProps(state) {
  // Whatever is returned will show up as props
  // inside of BookList
  return {
    board_list: state.boards.board_list
  };
}

export default connect(mapStateToProps)(BoardList);
