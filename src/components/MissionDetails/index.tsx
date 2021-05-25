import * as S from './styles'

type ShipsProps = {
  name: string
  home_port: string
  image: string
}
type LinksProps = {
  article_link: string | null
  video_link: string | null
}
export type MissionDetailsProps = {
  mission_name: string
  details: string | null
  ships: ShipsProps[]
  links: LinksProps
}

const MissionDetails = ({
  mission_name,
  details,
  ships,
  links
}: MissionDetailsProps) => (
  <S.Wrapper>
    <S.Image src="img/rocket.jpg" alt="Rocket image"></S.Image>
    <S.Content>
      <S.Title>{mission_name}</S.Title>
      {details && <S.Description>{details}</S.Description>}
      <S.Subtitle>Ships:</S.Subtitle>
      <S.Ships aria-label="ships">
        {ships?.map((item, id) => (
          <S.Ship key={id}>
            <S.Thumb alt="Thumb image" src={item.image}></S.Thumb>
            <span>
              {item.name}
              <br />
              Home port: {item.home_port}
            </span>
          </S.Ship>
        ))}
      </S.Ships>
      <S.WrapperLinks>
        {links.article_link && (
          <S.Link
            href={links.article_link}
            title="Article Link"
            target="_blank"
          >
            Article Link
          </S.Link>
        )}
        {links.video_link && (
          <S.Link title="Video Link" href={links.video_link} target="_blank">
            Video Link
          </S.Link>
        )}
      </S.WrapperLinks>
    </S.Content>
  </S.Wrapper>
)

export default MissionDetails
