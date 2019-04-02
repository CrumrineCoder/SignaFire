import React, { Component } from 'react';
import Message from "./Message.js"; 

class MessagesContainer extends Component {
  render() {

    let { messages } = this.props;

    let messagesContent = (
      <ul className="messages">
        {messages.map((message, i) => <Message key={i} {...message} />)}
      </ul>
    )

    return (
      <div className="messagesContainer">
        <h3>Starred: {this.props.starred}</h3>
        <Message></Message>
        {messagesContent}
      </div>
    );
  }
}

export default MessagesContainer;
