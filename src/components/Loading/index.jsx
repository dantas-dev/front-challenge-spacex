import React from 'react';

import './index.scss';
import GifLoading from '../../images/loading.gif';

function Loading() {
  return (
    <div className="loading">
      <img src={ GifLoading } alt="Rocket launching" />
    </div>
  );
}

export default Loading;
