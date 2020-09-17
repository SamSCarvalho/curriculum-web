import React from 'react';

import { Formation as data } from '../../../../data/dataCurriculum.json';
import Colors from '../../../../constants/colors';
import {
  TextColor,
  Container,
  TextBold,
  DivBorderLeft,
} from '../styles';

const Formation = () => (
  <Container>
    {data.formations.map((el, index) => (
      <DivBorderLeft key={index}>
        <TextBold>{el.institution}</TextBold>
        <TextColor color={Colors.third} weight={200}>{el.period} {el.location && `- ${el.location}`}</TextColor>
        <TextColor color={Colors.second} weight={100}>{el.describe}</TextColor>
      </DivBorderLeft>
    ))}
  </Container>
);

export default Formation;