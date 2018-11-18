import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import SearchButton from './SearchButton';

class SearchForm extends Component {
  constructor({ props }) {
    super(props);
    this.state = {
      value: '',
      searched: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // If we load on a search route, then fetch imgs realted to the term in the url
  componentDidMount() {
    const { isSearch, handleSearch, searchPath } = this.props;
    if (isSearch) {
      handleSearch(searchPath);
    }
  }

  // If we are on a search route, make sure we get fresh data from the API
  componentDidUpdate(prevProps) {
    const { searchPath, handleSearch } = this.props;
    if (searchPath && prevProps.searchPath !== searchPath) {
      handleSearch(searchPath);
    }
  }

  // This resets the "searched" state after a redirect to prevent infinite redirect loops
  static getDerivedStateFromProps(props) {
    const { term, searchPath } = props;
    if (searchPath === term) {
      return { searched: false };
    }
    return null;
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
    });
  }

  // Invokes the method that fetches new images; passed down as a prop
  handleSubmit(event) {
    const { value } = this.state;
    const { handleSearch } = this.props;

    if (value) {
      event.preventDefault();
      this.setState({ searched: true });
      handleSearch(value);
    }
  }

  render() {
    const { value, searched } = this.state;

    // If we submitted the search form we need to redirect to the search route
    // and display the term in the url
    if (searched) {
      return <Redirect push to={`/search/${value}`} />;
    }

    return (
      <form className="search-form">
        <input
          type="text"
          name="search"
          id="search"
          required
          autoComplete="off"
          value={value}
          onChange={this.handleChange}
        />
        <label htmlFor="search">Search</label>
        <SearchButton
          handleClick={(event) => {
            this.handleSubmit(event);
          }}
        />
      </form>
    );
  }
}

SearchForm.defaultProps = {
  searchPath: 'treehouse',
};

SearchForm.propTypes = {
  isSearch: PropTypes.bool.isRequired,
  handleSearch: PropTypes.func.isRequired,
  searchPath: PropTypes.string,
};

export default SearchForm;
