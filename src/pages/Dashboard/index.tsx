
import React from 'react';
import gql from 'graphql-tag';
import {useQuery} from '@apollo/react-hooks';
import formatDate from '../../utils/formatDate';
import {ListContainer, Container, Title} from './styles';
import { ContainerSpinner, Spinner} from '../../styles/global';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';

interface Mission{
    mission_name:string;
    id:number;
    launch_date_local:string;
    details:string;
}

interface MissionData {
   launchesPast:Mission[];
  }

const Dashboard: React.FC = () => {

  const Launches = gql`
  query{
      launchesPast(limit:10){
        mission_name,
        id,
        launch_date_local,
        details,
        
      }
  }
  `
  const { data, error,loading}= useQuery<MissionData>(Launches);
  

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
   <Header/>
    <Container>
      <Title><b>Last Launches</b></Title>
    <ul>
    {data?.launchesPast.map(mission => (
      
     <ListContainer key = {mission.id }>
         <Link to ={`/mission/${mission.id}`} >
        <li><b>{mission.mission_name}</b>
    <p>{mission.details}</p>
    <p><i>{formatDate(mission.launch_date_local)}</i></p>
        </li> 
        </Link>
        </ListContainer>
        
    ))}
  </ul>
   </Container>
</>
  );
};

export default Dashboard;