import React from 'react';
import { Link } from 'react-router-dom';

import './index.scss';
import { ReactComponent as IconMoon } from '../../icons/moon.svg';

function Header({ toggleTheme, inactiveTheme }) {
  return (
    <header className="header">
      <div className="container">
        <Link to="/">
          <h1 className="header__title">Graphql API SpaceX</h1>
        </Link>

        <button
          onClick={ toggleTheme }
          className="theme-toggle"
          type="button"
        >
          {/*  Capitalizes the first letter of inactiveTheme */}
          {`${inactiveTheme.charAt(0).toUpperCase() + inactiveTheme.slice(1)} Theme`}
          <IconMoon />
        </button>
      </div>
    </header>
  );
}

export default Header;
