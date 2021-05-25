import { formatDate } from 'utils/formatDate'
import * as S from './styles'

export type LaunchCardProps = {
  mission_name: string
  mission_link: string
  launch_date_local: string
}

const LaunchCard = ({
  mission_name,
  mission_link,
  launch_date_local
}: LaunchCardProps) => (
  <S.Wrapper href={`/mission/${mission_link}`}>
    <S.Title>{mission_name}</S.Title>
    <S.Description>
      This {mission_name} will launch the sixth batch of operational Starlink
      satellites, which are expected to be version 1.0, from SLC-40
    </S.Description>
    <S.Date>{formatDate(launch_date_local)}</S.Date>
  </S.Wrapper>
)

export default LaunchCard
