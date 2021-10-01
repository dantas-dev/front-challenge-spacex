/* eslint-disable no-unused-vars */
import React from 'react';
import { useParams } from 'react-router';
import { request, gql } from 'graphql-request';

function Mission() {
  const { missionId } = useParams();

  const [loading, setLoading] = React.useState(true);
  const [mission, setMission] = React.useState([]);

  // Fetch Mission
  React.useEffect(() => {
    const url = 'https://api.spacex.land/graphql/';
    const query = gql`
    {
      launch(id: ${missionId}) {
        mission_name
        details
        links {
          article_link
          flickr_images
        }
      }
    }        
    `;

    const fetchMission = async () => {
      const { launch } = await request(url, query);

      setMission(launch);
      setLoading(false);
    };

    fetchMission();
  }, [missionId]);

  if (loading) return 'Loading';

  return (
    <main>
      <img src={ mission.links.flickr_images[0] } alt={ mission.mission_name } />

      <h2>{mission.mission_name}</h2>
      <p>{mission.details}</p>

      <a
        href={ mission.links.article_link }
        target="_blank"
        rel="noreferrer"
      >
        See more
      </a>
    </main>
  );
}

export default Mission;
