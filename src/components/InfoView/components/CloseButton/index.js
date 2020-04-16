import React from 'react';

import {
  Container,
  Icon,
  Button
} from './styles';
import Img from '../../../../res/icons/close.png';

const CloseButton = ({ cancel }) => (
  <Container onClick={cancel} >
    <Button>
      <Icon src={Img} alt="close"/>
    </Button>
  </Container>
);

export default CloseButton;