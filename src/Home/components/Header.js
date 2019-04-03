import React, { Component } from 'react';
import logo from '../../assets/logo-sf-small.png';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <img className="headerLogo" src={logo} alt="Signafire Logo" />
        <p className="headerMessageViewer">Message Viewer</p>
      </div>
    );
  }
}

export default Header;
