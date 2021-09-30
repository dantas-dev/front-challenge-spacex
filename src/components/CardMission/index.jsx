import React from 'react';

import './index.scss';

function CardMission({ title, text, date }) {
  return (
    <div className="card-mission">
      <h3 className="card-mission__title">{title}</h3>

      <p className="card-mission__text">{text}</p>

      <span className="card-mission__date">{date}</span>
    </div>
  );
}

export default CardMission;
