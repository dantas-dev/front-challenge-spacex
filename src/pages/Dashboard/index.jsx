import React from 'react';
import { request, gql } from 'graphql-request';

import './index.scss';
import RocketIcon from '../../icons/rocket.png';
import CardMission from '../../components/CardMission';

function Dashboard() {
  const [loading, setLoading] = React.useState(true);
  const [missions, setMissions] = React.useState([]);

  const ONE_SECOND = 1000;

  // Fetch Missions
  React.useEffect(() => {
    const url = 'https://api.spacex.land/graphql/';
    const query = gql`
    {
      launchesPast(limit: 10) {
        id
        mission_name
        details
        launch_date_unix
      }
    }    
    `;

    const fetchMissions = async () => {
      const data = await request(url, query);
      setMissions(data.launchesPast);
      setLoading(false);
    };

    fetchMissions();
  }, []);

  if (loading) return 'Loading';

  return (
    <main className="dashboard">
      <h2 className="dashboard__title">
        Last Launches

        <img src={ RocketIcon } alt="Rocket" />
      </h2>

      <section className="dashboard__missions">
        {
          missions.map((mission) => (
            <CardMission
              key={ mission.id }
              title={ mission.mission_name }
              text={ mission.details || 'No details for this mission.' }
              date={
                new Date(mission.launch_date_unix * ONE_SECOND)
                  .toLocaleDateString()
              }
            />
          ))
        }
      </section>
    </main>
  );
}

export default Dashboard;
