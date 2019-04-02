import React, { Component } from 'react';

class Message extends Component {
  render() {
    console.log(this.props);
    let content = this.props;

    return (
      <div className="message">
        <div className="messageLeftHandProfileContent">
            <img src={content.avatar} />
            <p> {content.handle} </p>
        </div>
        <p> {content.content} </p>
      </div>
    );
  }
}

export default Message;
