import { gql, useQuery } from '@apollo/client';
import moment from 'moment';
import React from 'react';
import {
  Container,
  DateMission,
  DescriptionMission,
  Items,
  SpanName,
  TitleMission,
} from './styles';

// As tipagens dos meus dados requisitados
interface MissionInitial {
  mission_name: string;
  launch_date_local: string;
  id: string;
  launch_site: {
    site_name_long: string;
  };
  ships: {
    image: string;
  };
}

// Definindo ele como array para fazer o map dentro dele
interface MissionsInfo {
  launchesPast: Array<MissionInitial>;
}

// Fazendo a chamada a query como no exemplo = https://www.apollographql.com/docs/react/get-started/
const QUERY_MISSIONS_LAUNCHES_PAST = gql`
  query launchesPast {
    launchesPast(limit: 10) {
      id
      mission_name
      launch_date_local
      launch_site {
        site_name_long
      }
    }
  }
`;

const InitialPage: React.FC = () => {
  const { data, loading, error } = useQuery<MissionsInfo>(
    QUERY_MISSIONS_LAUNCHES_PAST,
  );

  if (loading) return <p> ...loading </p>;

  if (error) return <p> ...Error</p>;

  return (
    <Container>
      {data?.launchesPast.map(
        ({ id, mission_name, launch_site, launch_date_local }) => (
          <>
            <a href={`/details/${id}`}>
              <Items key={id}>
                <TitleMission>
                  Mission
                  <SpanName>{mission_name}</SpanName>
                </TitleMission>
                <DescriptionMission>
                  {launch_site.site_name_long}
                </DescriptionMission>

                <DateMission>
                  {moment(launch_date_local).format('DD/MM/YYYY HH:mm')}
                </DateMission>
              </Items>
            </a>
          </>
        ),
      )}
    </Container>
  );
};

export default InitialPage;
