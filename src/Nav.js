import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({ linkNames }) => {
  const links = linkNames.map(name => (
    <li key={name}>
      <Link to={`/${name.toLowerCase()}`}>{name}</Link>
    </li>
  ));

  return (
    <nav className="main-nav">
      <ul>{links}</ul>
    </nav>
  );
};

export default Nav;
