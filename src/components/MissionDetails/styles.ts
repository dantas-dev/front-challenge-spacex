import styled, { css } from 'styled-components'

const baseTitleStyles = css`
  color: #273944;
  margin-bottom: 1.2rem;
  text-align: center;
`

export const Wrapper = styled.main`
  border: 2px solid #c2d0d8;
  display: flex;
  align-items: center;
  background-color: #ffff;
  flex-direction: column;
`

export const Image = styled.img`
  width: 100%;
`

export const Title = styled.h1`
  font-size: 2.4rem;
  ${baseTitleStyles}
`
export const BackIcon = styled.a`
  position: relative;
  display: block;
  width: 100%;
  svg {
    position: absolute;
    left: 10px;
    top: 10px;
    max-width: 30px;
    color: white;
  }
`
export const Description = styled.p`
  font-size: 1.4rem;
  ${baseTitleStyles}
  margin-bottom: 0px;
`

export const Ships = styled.ul`
  align-self: flex-start;
`
export const Content = styled.div`
  padding: 12px 14px;
  display: flex;
  flex-direction: column;
  width: 100%;
`
export const Ship = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  span {
    font-size: 1.4rem;
    color: #273944;
    margin-left: 1.2rem;
  }
  margin-top: 1.2rem;
`
export const Subtitle = styled.h2`
  ${baseTitleStyles}
  text-align: start;
  font-size: 1.8rem;
  margin-bottom: 0px;
  margin-top: 1.2rem;
`
export const Thumb = styled.img`
  width: 100px;
  border-radius: 6px;
  height: 73px;
  object-fit: cover;
`
export const WrapperLinks = styled.div`
  align-self: center;
  padding-top: 1.6rem;
  padding-bottom: 1.6rem;
  margin-top: 1.2rem;
`

export const Link = styled.a`
  text-decoration: none;
  background-color: #c2d0d8;
  color: #273944;
  font-size: 1.4rem;
  border-radius: 6px;
  padding: 1.6rem;
  &:first-child {
    margin-right: 1.2rem;
  }
`
