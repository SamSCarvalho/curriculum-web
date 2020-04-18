import React from 'react';

import { Experience as data } from '../../../../data/dataCurriculum.json';
import Colors from '../../../../constants/colors';
import {
  Container,
  DivBorderLeft,
  Text,
  TextBold,
  TextColor,
  MarginLeftDiv,
} from '../styles';

const Experience = () => (
  <Container>
    {data.experiences.map(el => (
      <DivBorderLeft>
        <TextBold>{el.company}</TextBold>
        <TextColor color={Colors.third} weight={200}>{el.period} - {el.location}</TextColor>
        <TextColor color={Colors.second} weight={100}>{el.post}</TextColor>
        <Text>{el.projects.title}</Text>
        <MarginLeftDiv margin={1}>
          {el.projects.array.map(proj => (
            <TextColor color={Colors.second} weight={100}>{proj}</TextColor>
          ))}
        </MarginLeftDiv>
      </DivBorderLeft>
    ))}
    {/* <p>{ExperienceJson.title}</p> */}
  </Container>
);

export default Experience;