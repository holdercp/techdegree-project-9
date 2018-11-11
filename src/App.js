import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
      searchTerm: 'Ninjas',
      tags: ['Plane', 'Train', 'Automobile'],
    };

    this.fetchImgs = this.fetchImgs.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  componentDidMount() {
    const { searchTerm } = this.state;
    this.fetchImgs(searchTerm);
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
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  handleUpdate(tag) {
    this.fetchImgs(tag);
    this.setState({
      searchTerm: tag,
    });
  }

  render() {
    const { tags, imgs, searchTerm } = this.state;
    return (
      <Router>
        <div className="container">
          <Header linkNames={tags} handleSearch={this.handleUpdate} />
          <Gallery imgs={imgs} searchTerm={searchTerm} />
        </div>
      </Router>
    );
  }
}

export default App;
