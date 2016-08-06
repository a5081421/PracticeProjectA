/**
* @file 建立新的board
*/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import {Modal, Button} from 'react-bootstrap';
import { handleBoardModal } from '../actions/index';

class BoardListItemAddComponent extends Component {
    constructor(props) {
        super(props);

        this.handleModalClick = this.handleModalClick.bind(this);

    }

    handleModalClick(){
        this.props.handleBoardModal(!this.props.show);
    }


    onFormSubmit(event) {
        event.preventDefault();
    }

  render() {
    return (
      <li
        className="boards-page-board-section-list-item">
        <a
          className="board-title mod-add"
          onClick={this.handleModalClick}>
          <span>
              Create new board
          </span>
          <Modal {...this.props} bsSize="small" aria-labelledby="contained-modal-title-sm">
            <Modal.Header closeButton onHide={this.handleModalClick} >
              Create Board
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={this.onFormSubmit} >
                <fieldset className="form-group">
                  <label>Title:</label>
                  <input className="form-control" />
                </fieldset>
                <fieldset className="form-group">
                  <label>Team:</label>
                      <select className="form-control">
                         <option value="none">(none)</option>
                         <option value="1">TeamA</option>
                         <option value="2">TeamB</option>
                      </select>
                </fieldset>

                <button action="submit" className="btn btn-success">Create</button>
              </form>
            </Modal.Body>

          </Modal>
        </a>
      </li>
    );
  }
}

function mapStateToProps(state) {
  return {
    show: state.boards.show
  };
}

export default connect(mapStateToProps, {handleBoardModal})(BoardListItemAddComponent);
