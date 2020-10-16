import styled from 'styled-components';

interface TitleProps {
  center?: boolean;
}

export const Header = styled.h1`
  margin-bottom: 2rem;
`

export const Title = styled.h2<TitleProps>`
  margin-bottom: .5rem;
  font-weight: 600;
  text-align: ${props => props.center ? 'center' : 'start'}
`;

export const Description = styled.p`
  font-size: 1.2rem;
  line-height: 1.5rem;
  margin-bottom: .5rem
`;

export const ClampedDescription = styled(Description)`
  position: relative;
  max-height: calc(1.5rem * 4);
  overflow: hidden;
  
  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    display: block;
    width: 100%;
    height: 3rem;
    background: linear-gradient(0deg, var(--color-background-light) 0%, transparent 100%);
  }
`;

export const Date = styled.span`
  align-self: flex-end;
`;