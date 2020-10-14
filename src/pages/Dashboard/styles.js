import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 620px;
  margin: 0 auto;
`;

export const Card = styled(Link)`
  width: 100%;
  background: #FFF;
  text-decoration: none;
  color: #000;

  border-radius: 4px;
  padding: 16px;
  margin-top: 20px;

  > h1 {
    font-size: 24px;
    line-height: 34px;
    margin-bottom: 16px;
  }

  > p {
    line-height: 26px;
    text-align: center;
    margin-bottom: 8px;
  }

  p:last-child {
    display: flex;
    justify-content: flex-end
  }
`;