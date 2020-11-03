
import styled, { createGlobalStyle, keyframes } from 'styled-components';

export default createGlobalStyle`
  
  body {
    background-color: #000000;
    -webkit-font-smoothing: antialiased
  }
  body, input, button {
    font: 16px "Poppins", sans-serif;
    color: #293845;
  }
  button {
    cursor: pointer;
  }

  
`
const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const ContainerSpinner = styled.div`
position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);
`;

export const Spinner = styled.div`
position: absolute;
top: calc(50% - 4em);
left: calc(50% - 4em);
width: 6em;
height: 6em;
border: 1.1em solid #ffffff;
border-left: 1.1em solid #b8cad4;
border-radius: 50%;
animation: ${rotate360} 1.1s infinite linear;
transition: opacity 0.3s;
  
`;
;