
import React from 'react';
import gql from 'graphql-tag';
import {useQuery} from '@apollo/client';
import { ContainerSpinner, Spinner} from '../../styles/global';
import {ItemContainer, Container, ButtonItem, ItemContainerText} from './styles';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header';

interface RouteParams{
  id: string;
}

interface Mission{
    mission_name:string;
    id: number;
    details: number;
    links: LinksMission;
}
interface LinksMission{
  flickr_images:Array<string>;
  video_link:string;
}


const Mission: React.FC = () => {

    const { id } = useParams<RouteParams>();
   
  const Launches = gql`
  
  query{
      launchesPast(limit:10){
        mission_name,
        id,
        details,
        links{
          flickr_images
          video_link
        }
        
      }
  }
  `

  
  const { error, loading, data}= useQuery(Launches);
 
  
  if (loading){
    return (
      <ContainerSpinner>
      <Spinner></Spinner>
    </ContainerSpinner>
    )
  }
 
  if(error){
    return (
    <p>{error.message}</p>
    )
  }


  return (
  <>
   <Header />
    <Container>
      
     
    <ul>

    {data?.launchesPast.map((mission: Mission)=> (
      <>
     
  {
     parseInt(id) == mission.id ?
    <ItemContainer>
    
   {mission.links.flickr_images.length !== 0 ?  <img alt= "imagem of mission" src = {mission.links.flickr_images[0]}></img> : null}
      <p><b>{mission.mission_name}</b></p>
        <ItemContainerText>{mission.details}</ItemContainerText>
        <ButtonItem>
      <a href={mission.links.video_link}>See More</a>
        </ButtonItem>
      
    
    </ItemContainer>
    :null
}

    </>

    ))}
  </ul>
  </Container>
  </>

  );
};

export default Mission;