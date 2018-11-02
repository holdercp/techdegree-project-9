import React, { Component } from 'react';
import Header from './Header';
import Gallery from './Gallery';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Gallery />
      </div>
    );
  }
}

export default App;
