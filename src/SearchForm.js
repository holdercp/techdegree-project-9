import React, { Component } from 'react';

class SearchForm extends Component {
  constructor({ props }) {
    super(props);
    this.state = {
      value: '',
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
    handleSearch(value);
  }

  render() {
    const { value } = this.state;

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
