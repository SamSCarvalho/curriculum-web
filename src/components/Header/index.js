import React from 'react';


import Strings from '../../constants/strings';
import {
  Container,
  Title,
  SubTitle,
  Description,
  HeaderDiv
} from './styles';

const Header = () => (
  <HeaderDiv>
    <Container>
      <Title>{Strings.titlePage}</Title>
      <SubTitle>{Strings.subTitlePage}</SubTitle>
    </Container>
    <Description>{Strings.description}</Description>
  </HeaderDiv>
)

export default Header;