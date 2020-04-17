import styled from 'styled-components';

import Colors from '../../constants/colors';
import { Blink } from '../../animations';

export const HeaderDiv = styled.header`
  padding: 40px;
`;

export const Container = styled.div`
  text-align: left;
`;

export const Title = styled.h1`
  margin: 0px;
  margin-top: 4%;
  font-family: monospace;
  font-size: 2em;
  color: ${Colors.text};
`;

export const SubTitle = styled.span`
  font-family: monospace;
  font-size: 1.3em;
  color: ${Colors.primary};
`;

export const AnimateSubTitle = styled(SubTitle)`
  font-weight: bold;
  animation: ${Blink} 1s linear infinite;
`;

export const Description = styled.span`
  font-family: monospace;
  font-size: 0.5em;
  margin-top: 30px;
  color: ${Colors.second};
`;

