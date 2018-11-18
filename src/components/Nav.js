import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = ({ linkNames }) => {
  const links = linkNames.map(name => (
    <li key={name}>
      <NavLink to={`/${name.toLowerCase()}`} activeClassName="active">
        {name}
      </NavLink>
    </li>
  ));

  return (
    <nav className="main-nav">
      <ul>{links}</ul>
    </nav>
  );
};

export default Nav;
