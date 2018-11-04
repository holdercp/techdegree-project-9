import React from 'react';
import SearchForm from './SearchForm';
import Nav from './Nav';

const Header = ({ linkNames }) => (
  <header className="header">
    <SearchForm />
    <Nav linkNames={linkNames} />
  </header>
);

export default Header;
