/**
* @file Component 框架管理
*/
import React, { Component } from 'react';
import BoardList from '../containers/board_list';

export default class App extends Component {
  render() {
    return (
      <div className="member-boards-view">
        <BoardList />
      </div>
    );
  }
}
