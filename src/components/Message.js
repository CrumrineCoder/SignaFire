import React, { Component } from 'react';

class Message extends Component {
    render() {
        console.log(this.props);
        let content = this.props;
        var date = new Date(content.timestamp);
        console.log(date.toUTCString());
        return (
            <div className="message">
                <div className="messageLeftContainer">
                    <img src={content.avatar} className="messageLeftAvatar" />
                    <p className="messageLeftHandle"> {content.handle} </p>
                </div>
                <div className="messageMiddleContainer">
                    <div className="messageMiddleHeaderContainer">
                        <p className="messageMiddleHeaderSource">{content.source}</p>
                    </div>
                    <p className="messageMiddleContent"> {content.content} </p>
                </div>
            </div>
        );
    }
}

export default Message;
