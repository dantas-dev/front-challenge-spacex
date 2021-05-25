import Home, { HomeProps } from 'templates/Home'
import mock from 'templates/Home/mock'

export default function Index(props: HomeProps) {
  return <Home {...props} />
}

export async function getStaticProps() {
  return {
    revalidate: 10,
    props: {
      launchesPast: mock
    }
  }
}
