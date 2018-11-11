import React from 'react';
import SearchForm from './SearchForm';
import Nav from './Nav';

const Header = ({ linkNames, handleSearch }) => (
  <header className="header">
    <SearchForm handleSearch={handleSearch} />
    <Nav linkNames={linkNames} />
  </header>
);

export default Header;
