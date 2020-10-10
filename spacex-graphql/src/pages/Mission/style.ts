import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;

  justify-content: center;
  align-items: center;

  height: 100vh;
  margin: 0 3rem;
`;
export const CardBlock = styled.div`
  display: flex;

  flex-direction: column;
  color: whitesmoke;
  padding: 2rem;
  margin: 4rem;
  cursor: text;
  border-radius: 26px;
  background: linear-gradient(315deg, #1f272f, #293033);
  box-shadow: -9px -9px 12px #363b3e, 9px 9px 12px #464d50;

  h1 {
    font-size: 1.6rem;
    align-self: center;
  }
  span {
    color: white;
  }
  h2 {
    font-size: 1rem;
    font-weight: 400;
    &::selection {
      background-color: red;
    }
  }
  a {
    align-self: flex-end;
    color: whitesmoke;
    font-size: 1.2rem;
    font-weight: 700;
    margin: 10px;
    padding: 10px;
    color: red;
    &:hover {
      box-shadow: inset 0px -1px 1px 0px whitesmoke;
    }
  }
`;
export const CardLinks = styled.div`
  display: flex;
`;
