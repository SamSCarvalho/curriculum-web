import styled, { keyframes } from 'styled-components';

import Colors from '../../../../../../constants/colors';
// import { SlideProgess } from '../../../../../../animations'

const moveVertically = (porcent) => keyframes`
    0% {
      width : 0%
    }
    100% {
      width: ${porcent}
    }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  margin: 20px 0px 20px 0px;
`;

export const Text = styled.span`
  margin-right: 20px;
  font-size: 0.6em;
`;

export const Bar = styled.div`
  background: ${Colors.background};
  height: 5px;
`;

export const Progress = styled.div`
  background: ${Colors.third};
  animation : ${props => moveVertically(props.porcent)} 1s 0.8s both;
  width: ${props => props.porcent};
  height: 100%;
`;