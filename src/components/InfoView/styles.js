import styled from 'styled-components';

import { ZoomIn } from '../../animations';
import Colors from '../../constants/colors';

export const Container = styled.div`
  width: 80%;
  flex: 1;
  flex-grow: 5;
`;

export const Card = styled.div`
  background-color: ${Colors.secondBackground};
  border-radius: 20px;
  padding: 40px;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  animation: ${ZoomIn} 0.7s 0.2s both;
`;