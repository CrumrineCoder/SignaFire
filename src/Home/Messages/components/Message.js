import React, { Component } from 'react';
// For highlighting words with the highlighter input and submit buttons
import Highlighter from "react-highlight-words";

class Message extends Component {

    constructor(props) {
        super(props);
    
        // Bind actions to state
        this.toggleIsStarred = this.toggleIsStarred.bind(this);
        this.toggleIsTrashed = this.toggleIsTrashed.bind(this);
    }

    // When the user presses on the trash or star buttons, forward the logic to the parent (Message Container)

    toggleIsStarred() {
        this.props.onStarToggle(this.props.id);
    }

    toggleIsTrashed() {
        this.props.onTrashToggle(this.props.id);
    }


    render() {
        let content = this.props;

        // Format the date given from UTC timestamp
        var dateObj = new Date(content.timestamp);
        var month = dateObj.getUTCMonth(); //months from 1-12
        var day = dateObj.getUTCDate();
        var year = dateObj.getUTCFullYear();
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"
        ];
        let date = monthNames[month] + " " + day + ", " + year;

        return (
            <div className="message">
                <div className="messageLeftContainer">
                    <img src={content.avatar} className="messageLeftAvatar" alt={"User profile avatar"} />
                    <a className="messageLeftHandle" rel="noopener noreferrer" target="_blank" href={"https://twitter.com/"+content.handle}> {content.handle} </a>
                </div>
                <div className="messageMiddleContainer">
                    <div className="messageMiddleHeaderContainer">
                        <p className="messageMiddleHeaderContent">{content.source} | {date}</p>
                    </div>
                    <Highlighter
                        className="messageMiddleContent"
                        highlightClassName="messageMiddleContentHighlight"
                        searchWords={this.props.highlight}
                        autoEscape={true}
                        textToHighlight={content.content}
                    />
                </div>
                <div className="messageRightContainer">
                    <div className="messageRightButtonsContainer" style={{display: content.meta.isTrashed ? 'none' : 'inline-block' }}>
                        <button onClick={this.toggleIsStarred} className={content.meta.isStarred ? 'messageButton starButton activeButton' : 'messageButton starButton'}>{content.meta.isStarred ? "Starred!" : "Star Message!"}</button>
                        <button onClick={this.toggleIsTrashed} className="messageButton trashButton">Trash</button>
                    </div>
                    <div className="messageRightScoreContainer">
                        <p className="messageRightScore">{content.score} <i className="fas fa-star star"></i></p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Message;
