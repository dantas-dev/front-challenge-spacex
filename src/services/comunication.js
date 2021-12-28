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
  const { result, loading } = useQuery(gql`
    query getLaunch {
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
    data: result, 
    loading
  };
}
