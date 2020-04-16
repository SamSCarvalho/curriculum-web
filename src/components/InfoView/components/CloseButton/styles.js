import styled from 'styled-components';

import { Pulse } from '../../../../animations';
import Colors from '../../../../constants/colors';

export const Icon = styled.img`
  width: 20px;
`;

export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${Colors.primary};
  padding: 10px;
  border-radius: 100%;
  margin-top: -20px;
  margin-right: -20px;
  width: 25px;
  height: 25px;
`;


export const Container = styled.div`
  cursor: pointer;
  & :hover {
    opacity: 0.5;
    animation: ${Pulse} 0.8s 0s both;
  }
`;