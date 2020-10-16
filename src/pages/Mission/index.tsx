import React from 'react';
import { useParams } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';
import { FaArrowLeft } from 'react-icons/fa';

import { LaunchDetails as Launch } from '../../utils/interfaces';
import { LAUNCH_SHARED_INFO } from '../Dashboard';

import { Page, BackButton } from './styles';
import Panel from '../../components/Panel';
import Loading from '../../components/Loading';

interface MissionParams {
  missionId: string;
}

interface GetMissionDetails {
  launch: Launch;
}

const GET_LAUNCH_DETAILS = gql`
  query GetMissionDetails($missionId: ID!) {
    launch(id: $missionId) {
      links {
        article_link
        video_link
        flickr_images
      }
      ...LaunchSharedInfo
    }
  }
  ${LAUNCH_SHARED_INFO}
`;

function Mission() {
  const { missionId } = useParams<MissionParams>();
  const {
    data,
    loading,
    error
  } = useQuery<GetMissionDetails, MissionParams>(GET_LAUNCH_DETAILS,
    { variables: { missionId } }
  );

  return (
    <Page>
      <BackButton to="/">
        <FaArrowLeft size={16} /> Dashboard
      </BackButton>

      {loading && <Loading />}
      {error && <p>ERROR</p>}
      {!loading && !data && <p>Not found</p>}

      {data && (
        <Panel
          title={data.launch.mission_name}
          description={data.launch.details}
          image={data.launch.links.flickr_images[0]}
          article_link={data.launch.links.article_link}
          video_link={data.launch.links.video_link}
        />
      )}
    </Page>
  );
}

export default Mission;
