import styled, { css } from 'styled-components'

const baseTitleStyles = css`
  color: #273944;
  margin-bottom: 1.2rem;
`

export const Wrapper = styled.a`
  background-color: white;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  border: 2px solid #c2d0d8;
  padding: 14px 10px;
`

export const Title = styled.h4`
  ${baseTitleStyles}
  font-size: 1.8rem;
`

export const Description = styled.p`
  ${baseTitleStyles}
  font-size: 1.6rem;
`

export const Date = styled.time`
  ${baseTitleStyles}
  margin-bottom: 0px;
  font-size: 1.6rem;
  font-style: italic;
  align-self: flex-end;
`
