import React from 'react';
import SearchForm from './SearchForm';
import MainNav from './MainNav';

const Header = () => (
  <header className="header">
    <SearchForm />
    <MainNav />
  </header>
);

export default Header;
