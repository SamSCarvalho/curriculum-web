import React from 'react';

import { Container, FooterText }  from './styles';

import Strings from '../../constants/strings';

const Footer = () => (
  <Container>
    <FooterText>Criado por: {Strings.autor}</FooterText>
  </Container>
);

export default Footer;