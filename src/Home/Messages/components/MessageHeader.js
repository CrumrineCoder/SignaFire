import React, { Component } from 'react';


class MessageHeader extends Component {
    constructor(props) {
        super(props);

        // Bind actions to state
        this.handleHighlight = this.handleHighlight.bind(this);
        this.handleHighlightSubmit = this.handleHighlightSubmit.bind(this);
        this.toggleTrashOnly = this.toggleTrashOnly.bind(this);
    }

     // When the user users the toggle Trashed comments only button, type in the highlight text input, or submits the highlighted text with the button, forward the logic to the parent (Message Container)

    handleHighlight(e){
        this.props.handleHighlight(e);
    }

    handleHighlightSubmit(){
        this.props.handleHighlightSubmit();
    }
    
    toggleTrashOnly(){
        this.props.toggleTrashOnly();
    }

    render() {
        return (
            <div className="messageHeader">
                <h3>Starred: {this.props.starred}</h3>
                <button className="messageButton" onClick={this.toggleTrashOnly}>{this.props.isTrashOnly ? 'Show Untrashed Messages' : 'Show Trashed Messages'}</button>
                <input type="text" className="highlightInput" value={this.props.highlightPureText} onChange={this.handleHighlight} placeholder="Highlight text" />
                <button className="messageButton highlightSubmitButton" onClick={this.handleHighlightSubmit}>Submit</button>
            </div>
        );
    }
}

export default MessageHeader;
