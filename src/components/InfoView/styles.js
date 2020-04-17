import styled from 'styled-components';

import { ZoomIn, ZoomOut } from '../../animations';
import Colors from '../../constants/colors';

export const Container = styled.div`
  width: 80%;
  display: flex;
  flex: 1;
  flex-grow: 5;
  margin-bottom: 40px;
  justify-content: center;
`;

export const Card = styled.div`
  background-color: ${Colors.secondBackground};
  box-shadow: 2px 2px 0px 0px ${Colors.shadow};
  border-radius: 20px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  animation: ${props => props.animation ? ZoomOut : ZoomIn} 0.7s 0.2s both;
  width: max-content;
  height: max-content;
  min-width: 50%;
`;