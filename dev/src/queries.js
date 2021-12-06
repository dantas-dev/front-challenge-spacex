import {
    gql
} from "apollo-boost";

export const GET_CARDS = gql `
  query {
    launchesPast(limit: 10) {
        mission_name
        launch_date_local
        launch_site{
            site_name_long
        }
    }
  }
`;