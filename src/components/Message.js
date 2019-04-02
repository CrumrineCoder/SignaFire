import React, { Component } from 'react';
import Highlighter from "react-highlight-words";

class Message extends Component {

    constructor(props) {
        super(props);
        // Used for when searching and tagging functionality whenever that comes
        this.state = {
        }
        this.toggleIsStarred = this.toggleIsStarred.bind(this);
        this.toggleIsTrashed = this.toggleIsTrashed.bind(this);
    }

    toggleIsStarred() {
        this.props.onStarToggle(this.props.id);
    }

    toggleIsTrashed() {
        this.props.onTrashToggle(this.props.id);
    }


    render() {

        let content = this.props;
        var dateObj = new Date(content.timestamp);
        var month = dateObj.getUTCMonth(); //months from 1-12
        var day = dateObj.getUTCDate();
        var year = dateObj.getUTCFullYear();
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"
        ];
        let date = monthNames[month] + " " + day + ", " + year;

        let messageContent = "";

        if (this.props.highlight) {
            messageContent = (
                <Highlighter
                    className="messageMiddleContent"
                    highlightClassName="messageMiddleContentHighlight"
                    searchWords={this.props.highlight}
                    autoEscape={true}
                    textToHighlight={content.content}
                />
            )
        } else {
            messageContent = (
                <p className="messageMiddleContent"> {content.content} </p>
            )
        }

        return (
            <div className="message">
                <div className="messageLeftContainer">
                    <img src={content.avatar} className="messageLeftAvatar" />
                    <p className="messageLeftHandle"> {content.handle} </p>
                </div>
                <div className="messageMiddleContainer">
                    <div className="messageMiddleHeaderContainer">
                        <p className="messageMiddleHeaderContent">{content.source} | {date}</p>
                    </div>
                    {messageContent}
                </div>
                <div className="messageRightContainer">
                    <i onClick={this.toggleIsStarred} className={content.meta.isStarred ? 'fas fa-star activeStar messageRightStar' : 'far fa-star messageRightStar'}></i>
                    <p className="messageRightScore">{content.score}</p>
                    <i onClick={this.toggleIsTrashed} class="far fa-trash-alt messageRightTrash"></i>
                </div>
            </div>
        );
    }
}

export default Message;
