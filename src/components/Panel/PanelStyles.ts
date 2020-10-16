import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid var(--color-primary);
  width: 90%;
  max-width: 800px;
  background-color: #5D536B;
`;

export const PanelImage = styled.img`
  width: 100%;

  &.placeholder {
    background-color: var(--color-background);
    padding: 2rem;
  }
`;

export const PanelContent = styled.section`
  padding: 1rem;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
`;