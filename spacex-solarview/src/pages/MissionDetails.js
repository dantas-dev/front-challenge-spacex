import React from 'react';
import { useQuery, gql } from '@apollo/client';

const MISSION_DETAILS = gql`
  {
    launchesPast(limit: 10, offset: 10) {
      mission_name
      launch_date_local
      launch_site {
        site_name_long
      }
      links {
        article_link
        video_link
        flickr_images
      }
      rocket {
        rocket_name
        first_stage {
          cores {
            flight
            core {
              reuse_count
              status
            }
          }
        }
      }
      details
      launch_success
      id
    }
  }
`;

function MissionDetails() {
  const { loading, error, data } = useQuery(MISSION_DETAILS);

  async function sonsoleLogo(data) {
    console.log(data);
  }

  sonsoleLogo(data);

  if (loading) return <h3>Loading...</h3>;
  if (error) return `Error! ${error}`;
  return (
    <article className="detail-container">
      {/* <p>{data.launchesPast}</p> */}
    </article>
  )
};

export default MissionDetails;