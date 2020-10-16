import styled from 'styled-components';

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  width: 90%;
  max-width: 960px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    max-width: 640px;
  }
`;
