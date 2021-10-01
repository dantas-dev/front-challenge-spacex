import React from 'react';

import './index.scss';

function Header({ toggleTheme, inactiveTheme }) {
  return (
    <header className="header">
      <div className="container">
        <h1>Graphql API SpaceX</h1>

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
