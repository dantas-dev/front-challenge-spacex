import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

import { Container, Card } from './styles';

function Dashboard() {
  const LaunchMission = gql`
  query getLaunch {
    launchesPast(limit: 10) {
      mission_name
      details
      id
      launch_date_local
    }
  }`;

  const { error, loading, data } = useQuery(LaunchMission);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error! {error.message}</p>;
  }

  if (data) {
    return (
      <Container>
        {
          data.launchesPast.map(launch => (
            <Card to={`/mission/${launch.id}`}>
              <h1>{launch.mission_name}</h1>
              <p>{launch.details}</p>
              <p>{launch.launch_date_local.slice(0, 10)}</p>
            </Card>
          ))
        }
      </Container>  
    )
  }
}

export default Dashboard;