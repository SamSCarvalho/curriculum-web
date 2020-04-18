import React from 'react';

import { Contact as data } from '../../../../data/dataCurriculum.json';
import {
  Container,
} from '../styles';
import Colors from '../../../../constants/colors';
import Icons from '../../../Icons/contacts';

import TextIcon from './components/TextIcon';

const Contact = () => (
  <Container>
    {data.contacts.map((el, index) => {
      const element = Icons.find(icon => icon.type === el.type);
      if (!element) return null;
      return <TextIcon
        key={index}
        color={Colors.third}
        text={el.describe}
        Icon={element.Icon}
        hasLink={el.hasLink}
        link={el.link}
      />
    })}
  </Container>
);

export default Contact;