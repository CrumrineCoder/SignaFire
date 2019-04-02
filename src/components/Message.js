import React, { Component } from 'react';

class Message extends Component {

    constructor(props) {
        super(props);
        // Used for when searching and tagging functionality whenever that comes
        this.state = {
            isStarred: false,
            isTrashed: false 
        }
        this.toggleIsStarred = this.toggleIsStarred.bind(this);
    }

    componentWillMount(){
        this.setState({
            isStarred: this.props.meta.isStarred,
            isTrashed: this.props.meta.isTrashed
        })
    }

    toggleIsStarred(){
       /* this.setState({
            isStarred: !this.state.isStarred
        }) */
        this.props.onChange(this.props.id);
    }

    render() {
      //  console.log(this.props);
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
                        <p className="messageMiddleHeaderContent">{content.source} | {date}</p>
                    </div>
                    <p className="messageMiddleContent"> {content.content} </p>
                </div>
                <div className="messageRightContainer">
                    <i onClick={this.toggleIsStarred} className={content.meta.isStarred ? 'fas fa-star activeStar messageRightStar' : 'far fa-star messageRightStar'}></i>
                    <p className="messageRightScore">{content.score}</p>
                </div>
            </div>
        );
    }
}

export default Message;
