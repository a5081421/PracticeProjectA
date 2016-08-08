import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Header extends Component {

  render() {
    return (
      <nav className="navbar navbar-light">
        <Link to="/" className="navbar-brand">Back to Index</Link>
        <ul className="nav navbar-nav">
          HEADER
        </ul>
      </nav>
    );
  }
}


export default connect()(Header);
