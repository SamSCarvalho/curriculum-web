import React from 'react';


import Strings from '../../constants/strings';
import {
  Container,
  Title,
  SubTitle,
  Description,
  HeaderDiv,
  AnimateSubTitle
} from './styles';

const Header = ({ lineCommand }) => (
  <HeaderDiv>
    <Container>
      <Title>{Strings.titlePage}</Title>
      <SubTitle>{Strings.subTitlePage}</SubTitle>
      <SubTitle>{lineCommand.join('')}</SubTitle>
      <AnimateSubTitle>{Strings.subTitlePageAnimate}</AnimateSubTitle>
    </Container>
    <Description>{Strings.description}</Description>
  </HeaderDiv>
)

export default Header;