import { gql } from "apollo-boost";

export const get_missions = gql`
    query missions($limit: Int!) {
        launches(limit: $limit) {
            details
            mission_name
            mission_id
            launch_date_utc
            links {
                article_link
                flickr_images
                video_link
                presskit
            }
        }
    }
`;
