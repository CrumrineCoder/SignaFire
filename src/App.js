import React, { Component } from 'react';
import './App.css';

import Header from "./components/Header.js";
import MessagesContainer from "./components/MessagesContainer.js";


class App extends Component {

  render() {
    return (
      <div className="App">
        <Header></Header>
        <MessagesContainer></MessagesContainer>
      </div>
    );
  }
}

export default App;
