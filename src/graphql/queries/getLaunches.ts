const GET_LAUNCHES = /* GraphQL */ `
  query GET_LAUNCHES {
    launchesPast(limit: 10) {
      mission_name
      launch_date_local
      id
    }
  }
`

export default GET_LAUNCHES
