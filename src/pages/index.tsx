import { LaunchCardProps } from 'components/LaunchCard'
import client from 'graphql/client'
import GET_LAUNCHES from 'graphql/queries/getLaunches'
import Home, { HomeProps } from 'templates/Home'

export default function Index(props: HomeProps) {
  return <Home {...props} />
}

export async function getStaticProps() {
  const response = await client.request(GET_LAUNCHES)
  return {
    revalidate: 10,
    props: {
      launchesPast: response.launchesPast.map(
        (item: LaunchCardProps, id: number) => {
          return {
            mission_name: item.mission_name,
            launch_date_local: item.launch_date_local,
            mission_link: `${id}`
          }
        }
      )
    }
  }
}
