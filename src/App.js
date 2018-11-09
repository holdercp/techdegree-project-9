import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Axios from 'axios';
import APIKey from './config';
import Header from './Header';
import Gallery from './Gallery';

class App extends Component {
  static constructImgUrl({
    farm, server, id, secret,
  }, size = 'm') {
    return `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_${size}.jpg`;
  }

  constructor(props) {
    super(props);
    this.state = {
      imgs: [],
      loading: true,
      tags: ['Cats', 'Dogs', 'Computers'],
    };
  }

  fetchImgs(tag) {
    Axios.get('https://api.flickr.com/services/rest/', {
      params: {
        method: 'flickr.photos.search',
        api_key: APIKey,
        tags: tag,
        per_page: 24,
        page: 1,
        format: 'json',
        nojsoncallback: 1,
      },
    })
      .then(({ data: { photos: { photo } } }) => {
        const imgUrls = photo.map(img => ({
          url: App.constructImgUrl(img),
          id: img.id,
          title: img.title,
        }));
        this.setState({
          imgs: imgUrls,
          loading: false,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    const { tags, imgs } = this.state;
    return (
      <Router>
        <div className="container">
          <button type="button" onClick={() => this.fetchImgs('cats')}>
            Click me
          </button>
          <Header linkNames={tags} />
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
