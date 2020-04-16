import React from 'react';

import Menu from './components/Menu';
import { FlexContainer } from './styles';

import menuJson from '../../data/menu.json';

const MenuList = () => (
  <FlexContainer>
    {menuJson.map( el => 
      <Menu title={el.title} icon={el.icon} key={el.id} />
    )}
  </FlexContainer>
);

export default MenuList;