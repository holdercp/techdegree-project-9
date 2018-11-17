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
      searchResults: [],
      planesResults: [],
      trainsResults: [],
      automobilesResults: [],
      searchTerm: '',
      tags: ['Planes', 'Trains', 'Automobiles'],
      loading: false,
    };

    this.fetchImgs = this.fetchImgs.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  componentDidMount() {
    this.fetchImgs('planes', 'planesResults');
    this.fetchImgs('trains', 'trainsResults');
    this.fetchImgs('automobiles', 'automobilesResults');
  }

  fetchImgs(tag, stateLocation = 'searchResults') {
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
          loading: false,
          [stateLocation]: imgUrls,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  handleUpdate(tag) {
    this.setState({
      loading: true,
    });
    this.fetchImgs(tag);
    this.setState({
      searchTerm: tag,
    });
  }

  render() {
    const {
      tags,
      searchTerm,
      searchResults,
      planesResults,
      trainsResults,
      automobilesResults,
      loading,
    } = this.state;

    return (
      <Router>
        <div className="container">
          <Route
            render={props => (
              <Header
                {...props}
                linkNames={tags}
                handleSearch={this.handleUpdate}
                term={searchTerm}
              />
            )}
          />
          <Switch>
            <Route
              exact
              path="/planes"
              render={props => (
                <Gallery {...props} imgs={planesResults} heading="Planes" isLoading={loading} />
              )}
            />
            <Route
              exact
              path="/trains"
              render={props => (
                <Gallery {...props} imgs={trainsResults} heading="Trains" isLoading={loading} />
              )}
            />
            <Route
              exact
              path="/automobiles"
              render={props => (
                <Gallery
                  {...props}
                  imgs={automobilesResults}
                  heading="Automobiles"
                  isLoading={loading}
                />
              )}
            />
            <Route
              exact
              path="/search"
              render={props => (
                <Gallery {...props} imgs={searchResults} heading={searchTerm} isLoading={loading} />
              )}
            />
            <Route
              exact
              path="/search/:term"
              render={props => (
                <Gallery {...props} imgs={searchResults} heading={searchTerm} isLoading={loading} />
              )}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
