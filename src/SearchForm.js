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
      this.setState({ searched: false });
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
