import styled from 'styled-components';

import { FadeIn } from '../../animations';
import Colors from '../../constants/colors';

export const Container = styled.div`
  width: 80%;
  flex: 1;
`;

export const Card = styled.div`
  background-color: ${Colors.secondBackground};
  border-radius: 20px;
  padding: 40px;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  animation: ${FadeIn} 1s 0.2s both;
`;