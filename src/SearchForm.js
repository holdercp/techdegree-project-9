import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

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

  componentDidMount() {
    const { isSearch, handleSearch, searchPath } = this.props;
    if (isSearch) {
      handleSearch(searchPath);
    }
  }

  componentDidUpdate(prevProps) {
    const { searchPath, handleSearch } = this.props;
    if (searchPath && prevProps.searchPath !== searchPath) {
      handleSearch(searchPath);
    }
  }

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

  handleSubmit(event) {
    const { value } = this.state;
    const { handleSearch } = this.props;
    event.preventDefault();
    this.setState({ searched: true });
    handleSearch(value);
  }

  render() {
    const { value, searched } = this.state;

    if (searched) {
      return <Redirect push to={`/search/${value}`} />;
    }

    return (
      <form className="search-form">
        <label htmlFor="search">Search</label>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Ninjas"
          value={value}
          onChange={this.handleChange}
        />
        <button
          type="submit"
          onClick={(event) => {
            this.handleSubmit(event);
          }}
        >
          Search
        </button>
      </form>
    );
  }
}

export default SearchForm;
