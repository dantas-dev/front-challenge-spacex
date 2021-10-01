import React from 'react';

import './index.scss';

function Button({ children }) {
  return (
    <button type="button">
      {children}
    </button>
  );
}

export default Button;
