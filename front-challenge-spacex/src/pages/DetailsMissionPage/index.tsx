import { gql, useQuery } from '@apollo/client';
import React from 'react';
import { useParams } from 'react-router-dom';
import {
  Button,
  Card,
  Container,
  Content,
  DetailsCard,
  ItemDescription,
  MissionName,
} from './styles';

// As tipagens dos meus dados requisitados
interface LaunchInitial {
  mission_name: string;
  id: string;
  details: string;
  links: {
    article_link: string;
    video_link: string;
  };
  ships: [
    {
      image: string;
    },
  ];
}

interface LaunchId {
  id: string;
}

// Definindo ele como array para fazer o map dentro dele
interface LaunchInfo {
  launch: LaunchInitial;
}
const GET_MISSION = gql`
  query Launch($id: ID!) {
    launch(id: $id) {
      id
      details
      mission_name
      links {
        article_link
        video_link
      }
      ships {
        id
        image
      }
    }
  }
`;

const DetailsMissionPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data, loading, error } = useQuery<LaunchInfo, LaunchId>(GET_MISSION, {
    variables: {
      id,
    },
  });

  if (loading) return <p> ...loading </p>;

  if (error) return <p> ...Error</p>;

  return (
    <Container key={id}>
      <Content>
        <Card>
          {/* Como aqui tem um array de imagens, preferi pegar somente a imagem na posição 0 */}
          {data?.launch.ships[0] ? (
            <img src={data?.launch.ships[0].image} alt="" />
          ) : (
            <img
              src="https://mk0spaceflightnoa02a.kinstacdn.com/wp-content/uploads/2020/03/crs20_streak1.jpg"
              alt=""
            />
          )}

          <DetailsCard>
            <MissionName>{data?.launch.mission_name}</MissionName>
            <ItemDescription>{data?.launch.details}</ItemDescription>
            {/* Fiz essa condição para o artigo ter a preferencia */}
            <Button>
              <a
                href={
                  data?.launch.links.article_link
                    ? data?.launch.links.article_link
                    : data?.launch.links.video_link
                }
              >
                See more
              </a>
            </Button>
          </DetailsCard>
        </Card>
      </Content>
    </Container>
  );
};

export default DetailsMissionPage;
