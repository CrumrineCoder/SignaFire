import React, { Component } from 'react';

class Message extends Component {
  render() {
      console.log(this.props);
    return (
      <div className="message">
        <h5> Test </h5>
      </div>
    );
  }
}

export default Message;
