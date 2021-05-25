import styled from 'styled-components'

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  padding: 1.6rem 0;
  a {
    &:not(:first-child) {
      margin-top: 1.6rem;
    }
  }
`

export const Title = styled.h1`
  color: #273944;
`
