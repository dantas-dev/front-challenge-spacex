import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
  min-height: 100vh;
`;

export const BackButton = styled(Link)`
  position: absolute;
  top: 0;
  left: 0;
  margin: 1rem;
  font-size: 1.2rem;
`;
