import * as S from './styles'
import { Container } from 'components/Container'
import MissionDetails, { MissionDetailsProps } from 'components/MissionDetails'

const Mission = (props: MissionDetailsProps) => (
  <Container>
    <S.Wrapper>
      <MissionDetails {...props} />
    </S.Wrapper>
  </Container>
)

export default Mission
