import React from 'react';

import {
  TextWithIcon
} from '../../../styles';

const TextIcon = ({ color, Icon, text, hasLink, link }) => (
  <TextWithIcon color={color} >
    <div>
      <Icon />
    </div>
    {hasLink ?
      <a href={link} target="__blank">{text}</a>  :
      <p>{text}</p>
    }
  </TextWithIcon>
);

export default TextIcon;