import React from 'react';

import {
  Container,
  DivBorderLeft,
  Title,
  TextInline
} from '../styles';
import Porcent from './components/Porcent';

import { Knowledge as data } from '../../../../data/dataCurriculum.json';

const Knowledge = () => (
  <Container>
    <DivBorderLeft>
      <Title>{data.main.title}</Title>
      {data.main.array.map((el, index) => (
        <Porcent key={index} title={el.describe} porcent={el.porcent} />
      ))}
    </DivBorderLeft>
    <DivBorderLeft>
      <Title>{data.others.title}</Title>
      {data.others.array.map((el, index, array) => (
        <TextInline key={index}>
          {el}{(index < array.length - 1) ? ', ' : ''  }
        </TextInline>
      ))}
    </DivBorderLeft>
  </Container>
);

export default Knowledge;