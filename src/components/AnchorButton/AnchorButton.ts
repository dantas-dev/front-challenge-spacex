import styled from 'styled-components';

const AnchorButton = styled.a`
  font-size: 1.2rem;
  margin: 1rem;
  padding: .5rem 1rem;
  background-color: var(--color-background);
  border-radius: .5rem;
  transition: background-color .25s;

  &:hover {
    background-color: var(--color-background-lighter);
  }
`;

export default AnchorButton;
