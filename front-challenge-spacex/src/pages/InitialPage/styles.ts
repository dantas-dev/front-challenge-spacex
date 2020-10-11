import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const TitleMission = styled.h1`
  font-size: 1.3rem;
  margin: 0;
  align-self: flex-start;
`;

export const SpanName = styled.span`
  color: white;
  margin-left: 10px;
`;

export const DescriptionMission = styled.h2`
  font-size: 1rem;
  font-weight: 600;
`;

export const DateMission = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const Items = styled.div`
  display: flex;
  flex: 40%;
  flex-direction: column;
  color: whitesmoke;
  padding: 1rem;
  border: 1px solid #fff;
  margin: 2rem;
  cursor: pointer;
  border-radius: 4px;
  background: rgb(29, 27, 55);
  background: linear-gradient(
    90deg,
    rgba(50, 50, 57, 1) 6%,
    rgba(23, 22, 42, 1) 51%,
    rgba(40, 40, 70, 1) 97%
  );
  max-height: 70%;

  @media (max-width: 680px) {
    h1 {
      font-size: 1.2rem;
    }
  }
`;
