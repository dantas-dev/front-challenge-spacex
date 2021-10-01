import React from 'react';
import { Link } from 'react-router-dom';

import './index.scss';

function Header({ toggleTheme, inactiveTheme }) {
  return (
    <header className="header">
      <div className="container">
        <Link to="/">
          <h1>Graphql API SpaceX</h1>
        </Link>

        <button
          onClick={ toggleTheme }
          type="button"
        >
          {/*  Capitalizes the first letter of inactiveTheme */}
          {`${inactiveTheme.charAt(0).toUpperCase() + inactiveTheme.slice(1)} Theme`}
        </button>
      </div>
    </header>
  );
}

export default Header;
