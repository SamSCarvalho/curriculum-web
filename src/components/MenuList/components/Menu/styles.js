import styled from 'styled-components';

import Colors from '../../../../constants/colors';

export const MenuButton = styled.div`
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
  cursor: pointer;
  & :hover {
    opacity: 0.5;
  }
`;

export const Title = styled.span`
  font-family: monospace;
  font-size: 0.5em;
  color: ${Colors.second};
`;