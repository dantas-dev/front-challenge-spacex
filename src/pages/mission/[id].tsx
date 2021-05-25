import { MissionDetailsProps } from 'components/MissionDetails'
import client from 'graphql/client'
import GET_LAUNCHES_BY_ID from 'graphql/queries/getLaunchById'
import GET_LAUNCHES from 'graphql/queries/getLaunches'
import { GetStaticProps } from 'next'
import { LaunchPastProps } from 'pages'
import Mission from 'templates/Mission'

export default function Index(props: MissionDetailsProps) {
  return <Mission {...props}></Mission>
}

export async function getStaticPaths() {
  const response = await client.request(GET_LAUNCHES)
  const paths = response.launchesPast.map(({ id }: LaunchPastProps) => ({
    params: { id }
  }))

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const response = await client.request(GET_LAUNCHES_BY_ID, {
    id: params?.id
  })

  return {
    revalidate: 10,
    props: {
      mission_name: response.launch.mission_name,
      details: response.launch.details,
      ships: response.launch.ships,
      links: response.launch.links
    }
  }
}
