import React from 'react';

const SearchForm = () => (
  <form className="search-form">
    <label htmlFor="search">Search</label>
    <input type="text" name="search" id="search" placeholder="Ninjas" />
    <button type="submit">Search</button>
  </form>
);

export default SearchForm;
