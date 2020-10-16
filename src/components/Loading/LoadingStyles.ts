import styled, { keyframes } from 'styled-components';
import { FaSpinner } from 'react-icons/fa';

const spin = keyframes`
  from { }
  to { transform: rotate(360deg) }
`;

export const Spinner = styled(FaSpinner)`
  animation: 1.5s ${spin} infinite;
`;
