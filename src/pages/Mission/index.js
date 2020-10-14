import React from 'react';
import { useParams } from 'react-router-dom';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

import { Container, Card, Next } from './styles';

function Mission() {
  const { id } = useParams();

  const LaunchMission = gql`
  query getLaunch {
    launchesPast(limit: 10) {
      mission_name
      details
      id
      links {
        mission_patch_small
        video_link
      }
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
            <>
              {
                id === launch.id ? 
                <Card>
                  <img src={launch.links.mission_patch_small} alt="Imagem da missão"/>
                  <h1>{launch.mission_name}</h1>
                  <p>{launch.details}</p>
                  <Next href={launch.links.video_link} target="_blank">See more</Next>
                </Card> 
                : null
              }
            </>
          ))
        }
        
      </Container>
    );
  }
}

export default Mission;