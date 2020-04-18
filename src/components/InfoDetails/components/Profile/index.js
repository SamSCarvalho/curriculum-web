import React from 'react';

import {
  Container,
  Text,
  TextColor,
  Title,
} from '../styles';

import { ReactComponent as Icon } from '../../../../res/icons/pin.svg';
import Colors from '../../../../constants/colors';
import { Profile as ProfileJson } from '../../../../data/dataCurriculum.json';
import calculateAge from '../../../../utils/calculateAge';

const Profile = () => (
  <Container>
    <Title>{ProfileJson.name}</Title>
    <TextColor color={Colors.third} weight={200}>
      <Icon fill={Colors.third} width="0.8em" style={{ marginRight: 5 }} />
      {ProfileJson.location}
    </TextColor>
    <Text>
      {calculateAge(new Date(ProfileJson.birthday))} {ProfileJson.ageComplement}
    </Text>
  </Container>
);


export default Profile;