import React from 'react';

import './index.scss';
import RocketIcon from '../../icons/rocket.png';

function Dashboard() {
  return (
    <main className="dashboard">
      <h2 className="dashboard__title">
        Last Launches
        <img src={ RocketIcon } alt="Rocket" />
      </h2>
    </main>
  );
}

export default Dashboard;
