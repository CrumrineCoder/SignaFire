import React, { Component } from 'react';
import logo from '../assets/logo-sf-small.png';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <img className="headerLogo" src={logo} />
        <h4 className="headerMessageViewer">Message Viewer</h4>
      </div>
    );
  }
}

export default Header;
