import React from 'react';

import {
  Container,
  Card,
} from './styles';
import CloseButtom from './components/CloseButton';


const InfoView = ({ cancel, animation, ComponentDetails }) => (
  <Container>
    <Card animation={animation}>
      <CloseButtom cancel={cancel}/>
      <ComponentDetails />
    </Card>
  </Container>
);

export default InfoView;