import React from 'react';
import { Link } from 'react-router-dom';

import './index.scss';

function CardMission({ id, title, text, date }) {
  return (
    <Link to={ `missions/${id}` }>
      <div className="card-mission">
        <h3 className="card-mission__title">{title}</h3>

        <p className="card-mission__text">{text}</p>

        <span className="card-mission__date">{date}</span>
      </div>
    </Link>

  );
}

export default CardMission;
