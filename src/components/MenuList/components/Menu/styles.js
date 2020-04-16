import styled, { css } from 'styled-components';

import { FadeIn, Pulse } from '../../../../animations';
import Colors from '../../../../constants/colors';


export const MenuButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${Colors.primary};
  padding: 20px;
  border-radius: 100%;
  width: 60px;
  height: 60px;
`;

export const Icon = styled.img`
    width: 50px;
    vertical-align: -webkit-baseline-middle;
`;

export const ContainerButton = styled.div`
  margin: 40px;
  cursor: ${props => !props.selected ? 'pointer' : ''};
  animation: ${FadeIn} 0.8s 0.2s both;
  & :hover {
    ${props => !props.selected && css`
      opacity: 0.5;
      animation: ${Pulse} 0.8s 0s both;
    `}
  }
  ${props => props.selected && css`
    margin: 0px;
  `}
  animation-delay: 0.2s;
  animation-duration: 2.8s;
`;

export const Title = styled.span`
  font-family: monospace;
  font-size: 0.5em;
  color: ${Colors.second};
`;