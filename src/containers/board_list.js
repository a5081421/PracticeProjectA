/**
* @file 產生Board列表
*/
import React, { Component } from 'react';
import { connect } from 'react-redux';

class BoardList extends Component {

  renderList() {
    return this.props.boards.map((board) => {
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
    boards: state.boards
  };
}

export default connect(mapStateToProps)(BoardList);
