import React from 'react';

const Nav = ({ linkNames }) => {
  const links = linkNames.map(name => (
    <li>
      <a href={`/${name}`}>name</a>
    </li>
  ));

  return (
    <nav className="main-nav">
      <ul>{links}</ul>
    </nav>
  );
};

export default Nav;
