import React from 'react';

const Nav = ({ linkNames }) => {
  const links = linkNames.map(name => (
    <li key={name}>
      <a href={`/${name.toLowerCase()}`}>{name}</a>
    </li>
  ));

  return (
    <nav className="main-nav">
      <ul>{links}</ul>
    </nav>
  );
};

export default Nav;
