import { useQuery, useResult } from "@vue/apollo-composable";
import gql from "graphql-tag";

export function getLastLaunches () {
  function handleData(data){
    let {launchesPast} = data;
    launchesPast = launchesPast.map(element => {
      let object = JSON.stringify(element);
      object = JSON.parse(object)

      if(element.details != null)
        object.details = element.details.split('.')[0] + '.';

      const date = new Date(element.launch_date_local)
      object.launch_date_local = (
        date.getDate() + '/' +
        date.getMonth() + '/' +
        date.getFullYear()
      )
      return object
    });
    return launchesPast
  }
  const { result, loading } = useQuery(gql`
    query getList {
      launchesPast(limit: 10) {
        id
        mission_name
        details
        launch_date_local
      }
    }
  `);
  return {
    data: useResult(result, null, data => handleData(data)), 
    loading
  };
}

export function getLaunch(id){
  function handleData(data){
    let {launch} = data;
    let seeMore = (
      launch.links.article_link == null ?
      launch.links.video_link :
      launch.links.article_link
    )
    let image = (
      launch.ships.length == 0 ?
      "https://www.corsan.com.br/themes/padrao2019/images/outros/GD_imgSemImagem.png" :
      launch.ships[0].image
    )
    return {
      ...launch,
      seeMore,
      image
    };
  } 
  const { result, loading } = useQuery(gql`
    query getLaunchDetails {
      launch(id: ${id}) {
        details
        mission_name
        links {
          article_link
          video_link
        }
        ships {
          image
        }
      }
    }
  `);
  return {
    data: useResult(result, null, data => handleData(data)), 
    loading,
  };
}
