import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  padding: 100px;
  color: #565656;
`;

export const Content = styled.div`
  margin: 0 auto;
  width: 50%;
`;

export const Card = styled.div`
  border: 1px solid #fff;
  border-radius: 4px;
`;
export const DetailsCard = styled.div`
  border: 1px solid #fff;
  background: #fff;
`;

export const MissionName = styled.h1`
  font-weight: 600;
  font-size: 1.6rem;
  text-align: center;
  margin: 10px;
`;

export const ItemDescription = styled.div`
  font-size: 1rem;
  font-weight: 600;
  padding: 10px;
  line-height: 2;
`;

export const Button = styled.button`
  display: flex;
  margin: 20px auto;
  padding: 20px;
  font-weight: 600;
  color: #565656;
  font-size: 1rem;
  background: #ccc;
  border-radius: 5px;
  cursor: pointer;

  a {
    color: inherit;
    padding: 0;
  }

  :hover {
    background: ${darken('0.1', '#ccc')};
  }
`;
