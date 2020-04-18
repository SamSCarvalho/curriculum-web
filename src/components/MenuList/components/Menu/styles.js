import styled, { css } from 'styled-components';

import { FadeIn, Pulse, ZoomOut, FadeOut, ZoomIn } from '../../../../animations';
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
  margin-bottom: 20px;
`;

export const Icon = styled.img`
  width: 50px;
  vertical-align: -webkit-baseline-middle;
`;

export const ContainerButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: ${props => !props.selected ? '40px' : '0px'};
  cursor: ${props => !props.selected ? 'pointer' : ''};
  ${props => props.animation && css`
    animation: ${ZoomOut} 0.8s 0.2s both;
  `};
  ${props => props.selected && !props.animation && css`
    animation: ${ZoomIn} 0.2s 0.2s both;
  `};
  ${props => !props.selected && !props.animation && css`
    animation: ${FadeIn} 0.2s 0.2s both;
  `};
  & :hover {
    ${props => !props.selected && css`
      opacity: 0.5;
      animation: ${Pulse} 0.8s 0s both;
    `}
  }
  & :active {
    animation: ${FadeOut} 0.8s 0s both;
  }
`;

export const Title = styled.span`
  font-family: monospace;
  font-size: 0.5em;
  color: ${Colors.second};
`;