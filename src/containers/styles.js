import styled from 'styled-components';
import Colors from '../constants/colors';

export const Container = styled.div`
  text-align: center;
  background-color: ${Colors.background};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  margin: 0px;
  overflow-x: hidden;
`;