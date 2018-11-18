import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

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

Nav.propTypes = {
  linkNames: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Nav;
