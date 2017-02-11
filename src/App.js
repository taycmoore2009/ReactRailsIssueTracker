import React, { Component } from 'react';
import './App.css';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      value: null,
    };
  }
  render() {
    return (
      <div className="header">
      </div>
    );
  }
}


class App extends Component {
  render() {
    return (
      <div className="pageWrapper">
        <Header />
        <div className="mainContainer">
        </div>
      </div>
    );
  }
}

export default App;
