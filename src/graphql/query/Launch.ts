import gql from "graphql-tag";

const queryLauch = (idLaunch: string) => gql`
  query {
    launch(id: ${idLaunch}) {
      id
      details
      links {
        video_link
        flickr_images
      }
      mission_name
    }
  }
`;
export { queryLauch };
