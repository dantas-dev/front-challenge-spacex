import React from 'react';

import './index.scss';
import RocketIcon from '../../icons/rocket.png';
import CardMission from '../../components/CardMission';

function Dashboard() {
  return (
    <main className="dashboard">
      <h2 className="dashboard__title">
        Last Launches
        <img src={ RocketIcon } alt="Rocket" />
      </h2>

      <section className="dashboard__missions">
        <CardMission
          title="Test"
          // eslint-disable-next-line max-len
          text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias tempora aut quod quisquam veritatis excepturi architecto nostrum, placeat beatae iusto doloribus ipsam quae. Doloremque et earum dicta voluptas molestiae quis!"
          date="12/34/56"
        />

        <CardMission
          title="Test"
          // eslint-disable-next-line max-len
          text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias tempora aut quod quisquam veritatis excepturi architecto nostrum, placeat beatae iusto doloribus ipsam quae. Doloremque et earum dicta voluptas molestiae quis!"
          date="12/34/56"
        />

        <CardMission
          title="Test"
          // eslint-disable-next-line max-len
          text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias tempora aut quod quisquam veritatis excepturi architecto nostrum, placeat beatae iusto doloribus ipsam quae. Doloremque et earum dicta voluptas molestiae quis!"
          date="12/34/56"
        />
      </section>
    </main>
  );
}

export default Dashboard;
