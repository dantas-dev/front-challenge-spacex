import React from 'react';
import { useQuery, gql } from '@apollo/client';
import MissionCard from '../components/MissionCard';

const MISSIONS_CARDS = gql`
  {
    launchesPast(limit: 10, offset: 10) {
      mission_name
      launch_date_local
      links {
        flickr_images
      }
      rocket {
        rocket_name
        first_stage {
          cores {
            core {
              status
            }
          }
        }
      }
      launch_success
      id
    }
  }
`;

function Missions() {
  const { loading, error, data } = useQuery(MISSIONS_CARDS);

  if (loading) return <h3>Loading...</h3>;
  if (error) return `Error! ${error}`;
  return (
    <article className="missions-container">
      <h2 className="missions-title">Missions</h2>
      <section className="missions-cards">
        {data.launchesPast.map((each) => {
          return <MissionCard mission={ each } key={each.mission_name} />
        })}
      </section>
    </article>
  )
};

export default Missions;
