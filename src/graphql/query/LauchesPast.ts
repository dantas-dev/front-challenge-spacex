import gql from "graphql-tag";

const queryLauchesPast = gql`
  query {
    launchesPast(limit: 10) {
      id
      launch_date_local
      mission_name
      details
    }
  }
`;

export { queryLauchesPast };
