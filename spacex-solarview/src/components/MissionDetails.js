import React, { Component } from 'react';
import { useQuery, gql } from '@apollo/client';

const MISSION_DETAILS = gql`
  query GetMoreInfo {
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
        wikipedia
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
        second_stage {
          payloads {
            payload_type
            payload_mass_kg
            payload_mass_lbs
          }
        }
      }
      details
      launch_success
    }
  }
`;

export default class MissionDetails extends Component {
  render() {
    return (
      <div>
        
      </div>
    )
  }
}
