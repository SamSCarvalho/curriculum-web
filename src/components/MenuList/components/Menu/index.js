import React from 'react';

import {
  MenuButton,
  Icon,
  ContainerButton,
  Title
} from './styles';

const Menu = ({ title, icon, clicked }) => (
  <ContainerButton onClick={clicked}>
    <MenuButton>
      <Icon src={require(`../../../../res/icons/${icon}.png`)} alt={title} />
    </MenuButton>
    <Title>{title}</Title>
  </ContainerButton>
);

export default Menu;