import React, { Component } from 'react';
import Message from "../components/Message.js";
import MessageHeader from "../components/MessageHeader.js";

class MessagesContainer extends Component {

  constructor(props) {
    super(props);
    // Would have logic for storing the messages when it was received by an API were this a real application.
    this.state = {
      // Untrashed messages we show to the user on the message viewer
      messages: [
        {
          "id": 55747,
          "handle": "Kaitlyn.Barton32",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/marclgonzales/128.jpg",
          "timestamp": "2019-01-02T05:07:54.048Z",
          "source": "Twitter",
          "content": "Delectus facilis nisi consequatur numquam consequatur temporibus minima. Quaerat et id et asperiores alias inventore repellat qui. Laudantium at ut temporibus. Architecto delectus modi consequatur. Velit labore fuga iusto.",
          "score": 26,
          "meta": {
            "isStarred": false,
            "isTrashed": false
          }
        },
        {
          "id": 55070,
          "handle": "Jamar89",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/Stievius/128.jpg",
          "timestamp": "2018-04-03T06:40:56.003Z",
          "source": "Twitter",
          "content": "Quia ut molestiae ipsum. Impedit deleniti rerum doloribus. At repellat adipisci delectus neque distinctio iusto nulla. Occaecati sed quam dolorum. Aut ut quibusdam sunt. Magni velit ut repellat voluptatem.",
          "score": 61,
          "meta": {
            "isStarred": true,
            "isTrashed": false
          }
        },
        {
          "id": 9693,
          "handle": "Cathy.Rosenbaum",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/missaaamy/128.jpg",
          "timestamp": "2018-11-20T19:46:07.507Z",
          "source": "Twitter",
          "content": "Quos sapiente distinctio quia labore id. Non laborum fuga corporis magni voluptatem. Deleniti aut vel quibusdam. Hic amet voluptatum assumenda aliquam. Consequatur hic earum minus. Occaecati ipsa quam quos dolor tempore et repellendus est eligendi.",
          "score": 68,
          "meta": {
            "isStarred": false,
            "isTrashed": false
          }
        },
        {
          "id": 72523,
          "handle": "Eriberto_Stamm",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/curiousonaut/128.jpg",
          "timestamp": "2019-01-28T06:47:39.497Z",
          "source": "Twitter",
          "content": "Et accusantium occaecati ut. Inventore voluptatem sit illo eos omnis eos. Excepturi temporibus deserunt perspiciatis omnis vero. Omnis accusamus maiores consectetur quibusdam ipsam expedita recusandae laboriosam.",
          "score": 65,
          "meta": {
            "isStarred": true,
            "isTrashed": false
          }
        },
        {
          "id": 78896,
          "handle": "Tom14",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/coderdiaz/128.jpg",
          "timestamp": "2019-02-15T13:45:07.413Z",
          "source": "Twitter",
          "content": "Eligendi dignissimos sit repellendus provident. Eveniet eos aperiam illo.",
          "score": 43,
          "meta": {
            "isStarred": false,
            "isTrashed": false
          }
        },
        {
          "id": 64717,
          "handle": "Reta.Pfeffer29",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/ateneupopular/128.jpg",
          "timestamp": "2018-05-10T16:29:36.060Z",
          "source": "Twitter",
          "content": "Placeat temporibus ea eligendi quod esse. Commodi quaerat quia sequi soluta sit alias. Officia illum recusandae quia omnis suscipit qui debitis. Tempora dolor quod consequuntur odit laudantium quaerat ut. Et perferendis sit blanditiis aut neque velit dolores a illo.",
          "score": 46,
          "meta": {
            "isStarred": false,
            "isTrashed": false
          }
        },
        {
          "id": 12811,
          "handle": "Willy.Kertzmann",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/liminha/128.jpg",
          "timestamp": "2018-10-10T22:27:48.120Z",
          "source": "Twitter",
          "content": "Sit fugit illum voluptatem et praesentium. Maiores assumenda aspernatur ipsa pariatur molestias asperiores aut quia. Et et tenetur reiciendis voluptatem animi. Vel aut sit voluptatem et libero totam. Sunt expedita aut nobis error aut quia eveniet molestiae repellendus. Voluptas expedita iste voluptatem unde eos quia.",
          "score": 7,
          "meta": {
            "isStarred": false,
            "isTrashed": false
          }
        },
        {
          "id": 57354,
          "handle": "Maximillia3",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/franciscoamk/128.jpg",
          "timestamp": "2018-12-29T08:57:05.202Z",
          "source": "Twitter",
          "content": "Voluptatem natus animi sint perspiciatis id sed est. Dignissimos ab aliquid aut ullam excepturi.",
          "score": 97,
          "meta": {
            "isStarred": false,
            "isTrashed": false
          }
        },
        {
          "id": 13594,
          "handle": "Kaleb54",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/thierrykoblentz/128.jpg",
          "timestamp": "2018-06-21T22:32:07.574Z",
          "source": "Twitter",
          "content": "Quam tempore mollitia quasi minima. Eos occaecati et qui ex mollitia sit qui qui et. Ad enim vel commodi. Magni voluptatum alias libero provident quibusdam neque aperiam.",
          "score": 79,
          "meta": {
            "isStarred": false,
            "isTrashed": false
          }
        },
        {
          "id": 74835,
          "handle": "Anabel_Swaniawski",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/spacewood_/128.jpg",
          "timestamp": "2018-10-19T17:41:49.267Z",
          "source": "Twitter",
          "content": "Laboriosam voluptas quia consequatur ducimus rerum. Expedita iste enim doloremque rerum ipsam. Consequatur eveniet corporis eos. Velit sed assumenda. Molestiae itaque molestias quisquam quae rem est mollitia autem.",
          "score": 79,
          "meta": {
            "isStarred": true,
            "isTrashed": false
          }
        },
        {
          "id": 62569,
          "handle": "Keith_Huel",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/8d3k/128.jpg",
          "timestamp": "2018-06-24T11:41:26.774Z",
          "source": "Twitter",
          "content": "Voluptate enim doloribus placeat excepturi. Eius sed doloremque laborum ad facere laboriosam quis. Corporis voluptas nulla nulla molestiae et. Et cum atque voluptatem delectus ex rem sed. Quidem dolorem aliquam molestiae nostrum rerum.",
          "score": 93,
          "meta": {
            "isStarred": false,
            "isTrashed": false
          }
        },
        {
          "id": 3642,
          "handle": "Estell_Wintheiser",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/antonyzotov/128.jpg",
          "timestamp": "2018-10-17T09:21:03.845Z",
          "source": "Twitter",
          "content": "Laboriosam aut perferendis ut qui quas ducimus. Tempore nihil totam corporis ratione soluta accusantium labore hic.",
          "score": 76,
          "meta": {
            "isStarred": false,
            "isTrashed": false
          }
        },
        {
          "id": 1780,
          "handle": "Brody.Yost98",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/naupintos/128.jpg",
          "timestamp": "2018-09-10T11:01:23.854Z",
          "source": "Twitter",
          "content": "Iste voluptas eaque est doloribus dolorum nemo reiciendis distinctio. Qui quia minus. Sed est suscipit.",
          "score": 40,
          "meta": {
            "isStarred": false,
            "isTrashed": false
          }
        },
        {
          "id": 92074,
          "handle": "Lilliana_Will38",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/dutchnadia/128.jpg",
          "timestamp": "2019-03-26T18:21:27.558Z",
          "source": "Twitter",
          "content": "Voluptas sapiente molestias vitae. Sunt neque ipsa quam. Tempore odit ipsam est qui ut eius harum molestiae. Nulla sit eos doloribus iusto consequatur dolores. Possimus dolor alias tempora culpa consequuntur aliquam et quo delectus.",
          "score": 39,
          "meta": {
            "isStarred": true,
            "isTrashed": false
          }
        },
        {
          "id": 28906,
          "handle": "Wilfredo_Dickens",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/madebybrenton/128.jpg",
          "timestamp": "2019-03-24T11:31:29.278Z",
          "source": "Twitter",
          "content": "Id id non ut sed sed et sint eaque. Inventore optio fugiat unde nulla voluptates quia quasi tenetur omnis. Dolorem in enim nihil autem recusandae. Nesciunt enim necessitatibus sunt eveniet ipsam cum. Rerum aut iure earum non neque quas qui.",
          "score": 4,
          "meta": {
            "isStarred": false,
            "isTrashed": false
          }
        },
        {
          "id": 67736,
          "handle": "Milan_Kunde67",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/rangafangs/128.jpg",
          "timestamp": "2019-03-03T16:23:31.674Z",
          "source": "Twitter",
          "content": "Ipsam sunt possimus quod voluptas explicabo. Occaecati molestiae placeat et quia sit eaque consequatur.",
          "score": 9,
          "meta": {
            "isStarred": true,
            "isTrashed": false
          }
        },
        {
          "id": 69703,
          "handle": "Rashad.Predovic",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/ricburton/128.jpg",
          "timestamp": "2018-10-23T16:58:19.168Z",
          "source": "Twitter",
          "content": "Unde quo molestias molestias veritatis rerum quis. Et quia enim aliquid sed. Aut nisi consequatur et animi. Rerum debitis ipsa natus velit nam suscipit autem. Et animi itaque alias quos at vel amet.",
          "score": 53,
          "meta": {
            "isStarred": false,
            "isTrashed": false
          }
        },
        {
          "id": 91826,
          "handle": "Verna.Casper",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/lepinski/128.jpg",
          "timestamp": "2019-01-11T07:35:33.351Z",
          "source": "Twitter",
          "content": "Cumque recusandae accusamus voluptas. Quia repellat eos.",
          "score": 73,
          "meta": {
            "isStarred": true,
            "isTrashed": false
          }
        },
        {
          "id": 87442,
          "handle": "Will_Collins7",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/bistrianiosip/128.jpg",
          "timestamp": "2018-05-04T11:29:35.144Z",
          "source": "Twitter",
          "content": "Et et rerum temporibus libero natus. Beatae deleniti necessitatibus repellendus quo. In recusandae tempore totam quis suscipit mollitia. Sed cupiditate sequi ipsum. Facere rerum quaerat delectus et earum consequuntur. Mollitia labore et est nihil reprehenderit nisi ratione.",
          "score": 6,
          "meta": {
            "isStarred": true,
            "isTrashed": false
          }
        },
        {
          "id": 51946,
          "handle": "Genesis.Cassin",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/joe_black/128.jpg",
          "timestamp": "2018-09-03T12:19:33.793Z",
          "source": "Twitter",
          "content": "Voluptates rerum illo delectus dicta et. Doloremque laudantium perspiciatis suscipit. Dolor et veniam. Omnis eos aut et hic dolor. Quia et aut.",
          "score": 5,
          "meta": {
            "isStarred": false,
            "isTrashed": false
          }
        }
      ],
      // Amount of comments starred by the user
      starred: 0,
      // Store the comments the user has trashed here
      trashedMessages: [],
      // True: We are viewing only trashed comments, False: We are viewing only untrashed comments
      isTrashOnly: false,
      // The text stored for the user to see in the highlight input (so it doesn't automatically update in the view)
      highlightPureText: "",
      // When the user clicks the submit button, we translate the highlightPureText into arrays to be used by the Highlighter class imported from react-highlight-words.
      highlightSubmitText: []
    };

    // Bind actions to state
    this.handleStar = this.handleStar.bind(this);
    this.updateStarCount = this.updateStarCount.bind(this);

    this.handleTrash = this.handleTrash.bind(this);
    this.toggleTrashOnly = this.toggleTrashOnly.bind(this);

    this.handleHighlight = this.handleHighlight.bind(this);
    this.handleHighlightSubmit = this.handleHighlightSubmit.bind(this);
  }

  // Recalculate how many messages are starred by the user (not including trashed)
  updateStarCount() {
    // Count how comments many are starred
    var sum = 0;
    for (var i = 0; i < this.state.messages.length; i++) {
      if (this.state.messages[i].meta.isStarred) {
        sum += 1;
      }
    }
    // Update the star count in the state
    this.setState({
      starred: sum
    })
  }

  // Upon opening the app, calculate how many messages are starred
  componentWillMount() {
    this.updateStarCount();
  }

  // User clicks on Star Message!/Starred!
  handleStar(id) {
    // Get the index of the message clicked on
    let index = this.state.messages.findIndex(x => x.id === id);
    // Backup of the messages
    let messagesUpdate = this.state.messages;
    // Change the total score of the message accordingly (if it's already starred by the user, decrease the score, if not increase)
    let updateMessageStarTotal = 1;
    if (messagesUpdate[index].meta.isStarred) {
      updateMessageStarTotal = -1;
    }
    // Increase/decrease the score.
    messagesUpdate[index].score += updateMessageStarTotal;
    // Reverse whether the message is starred or not
    messagesUpdate[index].meta.isStarred = !messagesUpdate[index].meta.isStarred;
    // Update the messages in the state, and then recalculate how many messages are starred by the user
    this.setState({
      messages: messagesUpdate
    }, this.updateStarCount);
  }

  // User clicks on Trash
  handleTrash(id) {
    // Get the index of the message clicked on
    let index = this.state.messages.findIndex(x => x.id === id);
    // Get the message clicked on
    let trashUpdate = this.state.messages[index];
    // Change the meta data so that the message is trashed
    trashUpdate.meta.isTrashed = true;
    // Get all messages that isn't this one
    let messagesUpdate = this.state.messages.filter(function (obj) {
      return obj.id !== id;
    });
    // Add the trashed message to the others
    trashUpdate = this.state.trashedMessages.concat(trashUpdate);

    // Update the messages and trashed messages in the state, and then recalculate how many messages are starred by the user
    this.setState({
      messages: messagesUpdate,
      trashedMessages: trashUpdate
    }, this.updateStarCount);
  }

  // Toggle whether or not we're only viewing trashed comments
  toggleTrashOnly() {
    this.setState({
      isTrashOnly: !this.state.isTrashOnly
    })
  }

  // Based on the text input, change the pure text
  handleHighlight(e) {
    this.setState({
      highlightPureText: e.target.value
    })
  }

  // Take the pure highlight text input and turn it into an array split by spaces, to be used for the highlighter
  handleHighlightSubmit() {
    this.setState({
      highlightSubmitText: this.state.highlightPureText.split(" ")
    })
  }

  render() {

    let { messages, trashedMessages } = this.state;

    
    let messagesContent = "";

    // If we're only viewing trashed messages, make the messages components with the trashed messages, and don't highlight the text.
    if (this.state.isTrashOnly) {
      messagesContent = (
        <ul className="messages">
          {trashedMessages.map((message, i) => <Message highlight={[]} onStarToggle={this.handleStar} onTrashToggle={this.handleTrash} key={i} id={message.id} {...message} />)}
        </ul>
      )
    }
    // If we are viewing untrashed messages, use the messages from messages, and highlight the text.
    else {
      messagesContent = (
        <ul className="messages">
          {messages.map((message, i) => <Message highlight={this.state.highlightSubmitText} onStarToggle={this.handleStar} onTrashToggle={this.handleTrash} key={i} id={message.id} {...message} />)}
        </ul>
      )
    }

    return (
      <div className="messagesContainer">
        <MessageHeader
          isTrashOnly={this.state.isTrashOnly}
          starred={this.state.starred}
          highlightPureText={this.state.highlightPureText}
          toggleTrashOnly={this.toggleTrashOnly}
          handleHighlight={this.handleHighlight}
          handleHighlightSubmit={this.handleHighlightSubmit}
        >
        </MessageHeader>
        {messagesContent}
      </div>
    );
  }
}

export default MessagesContainer;
