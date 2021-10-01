import React from 'react';
import { useParams } from 'react-router';
import { request, gql } from 'graphql-request';

import './index.scss';
import '../../components/Button/index.scss';
import ImageFallback from '../../images/fallback.jpg';

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
    <main className="mission">
      <section className="mission__details">
        <div className="mission__details__image-container">
          <img
            src={ mission.links.flickr_images[0] || ImageFallback }
            alt={ mission.mission_name }
          />
        </div>

        <div className="mission__details__text-container">
          <h2>{mission.mission_name}</h2>
          <p>{mission.details}</p>

          <a
            href={ mission.links.article_link }
            target="_blank"
            rel="noreferrer"
            className="button"
          >
            See more
          </a>
        </div>
      </section>
    </main>
  );
}

export default Mission;
