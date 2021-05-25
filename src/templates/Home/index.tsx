import * as S from './styles'
import { Container } from 'components/Container'
import LaunchCard, { LaunchCardProps } from 'components/LaunchCard'

export type HomeProps = {
  launchesPast: LaunchCardProps[]
}

const Home = ({ launchesPast }: HomeProps) => (
  <Container>
    <S.Wrapper>
      {launchesPast?.map((launch, id) => (
        <LaunchCard key={id} {...launch} />
      ))}
    </S.Wrapper>
  </Container>
)

export default Home
