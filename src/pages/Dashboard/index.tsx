import React from 'react';
import { Link } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';

import { LaunchCommon as Launch } from '../../utils/interfaces';

import { Page, CardContainer } from './styles';
import { Header } from '../../components/Text';
import Card from '../../components/Card';
import Loading from '../../components/Loading';

interface GetLaunchList {
  launchesPast: Launch[];
}

export const LAUNCH_SHARED_INFO = gql`
  fragment LaunchSharedInfo on Launch {
    mission_name
    details
  }
`;

const GET_LAUNCHES = gql`
  query GetLaunches {
    launchesPast(limit: 10) {
      id
      launch_date_unix
      ...LaunchSharedInfo
    }
  }
  ${LAUNCH_SHARED_INFO}
`;

function Dashboard() {
  const {
    data,
    loading,
    error
  } = useQuery<GetLaunchList>(GET_LAUNCHES);

  return (
    <Page>
      <Header>
        Latest Launches <span role="img" aria-label="rocket">🚀</span>
      </Header>

      {loading && <Loading />}
      {error && <p>ERROR</p>}
      {!loading && !data && <p>Not found</p>}

      <CardContainer>
        {data?.launchesPast && data?.launchesPast.map((launch: Launch) => (
          <Link to={`/mission/${launch.id}`} key={launch.id}>
            <Card
              title={launch.mission_name}
              description={launch.details}
              date={launch.launch_date_unix}
            />
          </Link>
        ))}
      </CardContainer>
    </Page>
  );
}

export default Dashboard;
