import React, { Component } from 'react';

class Message extends Component {
    render() {
        console.log(this.props);
        let content = this.props;
        var dateObj = new Date(content.timestamp);
        var month = dateObj.getUTCMonth(); //months from 1-12
        var day = dateObj.getUTCDate();
        var year = dateObj.getUTCFullYear();
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"
        ];
        let date = monthNames[month] + " " + day + ", " + year
        return (
            <div className="message">
                <div className="messageLeftContainer">
                    <img src={content.avatar} className="messageLeftAvatar" />
                    <p className="messageLeftHandle"> {content.handle} </p>
                </div>
                <div className="messageMiddleContainer">
                    <div className="messageMiddleHeaderContainer">
                        <p className="messageMiddleHeaderSource">{content.source}</p>
                        <p className="messageMiddleHeaderDate">{date}</p>
                    </div>
                    <p className="messageMiddleContent"> {content.content} </p>
                </div>
            </div>
        );
    }
}

export default Message;
