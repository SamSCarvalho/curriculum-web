import React from 'react';

import {
  Container,
  Text,
  Bar,
  Progress
} from './styles';

const Porcent = ({ title, porcent }) => (
  <Container>
    <Text>{title}</Text>
    <Bar>
      <Progress porcent={porcent} />
    </Bar>
  </Container>
);

export default Porcent;