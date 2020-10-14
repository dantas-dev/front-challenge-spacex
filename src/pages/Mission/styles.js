import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin: 0 auto;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: #FFF;
  border-radius: 4px;
  padding: 16px;
  margin-top: 20px;

  h1 {
    font-size: 24px;
    line-height: 34px;
    margin: 16px 0;
  }

  p {
    text-align: center;
    line-height: 26px;
    margin: 16px 0;
  }
`;

export const Next = styled.a`
  color: #FFF;
  font-weight: bold;
  text-decoration: none;

  background: #4d94ff;
  padding: 10px;
  border-radius: 6px;
  cursor: pointer;
  
  &:hover {
    background: #3385ff;
  }
`;
