import React from 'react';
import SearchForm from './SearchForm';
import Nav from './Nav';

const Header = ({
  linkNames, handleSearch, term, location,
}) => {
  // Check to see if we are on a search route and add it to props (wish I could just use the match param but this header has to render on every route)
  const isSearch = location.pathname.slice(1, 8) === 'search/';

  // Construct the props obj we will pass to the SearchForm since the searchPath prop is conditional
  const searchProps = {
    handleSearch,
    term,
    isSearch,
  };

  // If we're on a search route, grab the term and add it to props
  if (isSearch) {
    searchProps.searchPath = location.pathname.slice(8);
  }

  return (
    <header className="header">
      <SearchForm {...searchProps} />
      <Nav linkNames={linkNames} />
    </header>
  );
};

export default Header;
