const GET_LAUNCHES_BY_ID = /* GraphQL */ `
  query GET_LAUNCHES_BY_ID($id: ID!) {
    launch(id: $id) {
      mission_name
      launch_date_local
      details
      ships {
        name
        home_port
        image
      }
      launch_site {
        site_name_long
      }
      links {
        article_link
        video_link
      }
      rocket {
        rocket_name
        first_stage {
          cores {
            flight
            core {
              reuse_count
              status
            }
          }
        }
        second_stage {
          payloads {
            payload_type
            payload_mass_kg
            payload_mass_lbs
          }
        }
      }
      ships {
        name
        home_port
        image
      }
    }
  }
`

export default GET_LAUNCHES_BY_ID
