import styled, { css } from 'styled-components';

export const FlexContainer = styled.div`
  display: flex;
  flex-grow: 1;
  margin: 4%;
  flex-wrap: wrap;
  flex: 1;
  width: 40%;
  @media (max-width: 917px) {
    width: 70%;
  }
  @media (max-width: 768px) {
    width: 90%;
  }
  justify-content: center;
  ${props => props.selected && css`
    margin: 0px;
    margin-bottom: 20px;
  `}
`;