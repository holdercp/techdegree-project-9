import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Header';
import Gallery from './Gallery';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgs: [
        {
          id: '1',
          url: 'https://via.placeholder.com/300',
          title: 'This is the img title',
          description: 'This is a description',
        },
        {
          id: '2',
          url: 'https://via.placeholder.com/300',
          title: 'This is the img title',
          description: 'This is a description',
        },
        {
          id: '3',
          url: 'https://via.placeholder.com/300',
          title: 'This is the img title',
          description: 'This is a description',
        },
        {
          id: '4',
          url: 'https://via.placeholder.com/300',
          title: 'This is the img title',
          description: 'This is a description',
        },
      ],
      topics: ['Cats', 'Dogs', 'Computers'],
    };
  }

  render() {
    const { topics, imgs } = this.state;
    return (
      <Router>
        <div className="container">
          <Header linkNames={topics} />
          <Route
            render={({ location, props }) => (location.pathname !== '/search' ? <Gallery {...props} imgs={imgs} /> : '')
            }
          />
        </div>
      </Router>
    );
  }
}

export default App;
