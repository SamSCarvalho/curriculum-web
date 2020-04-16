import React from 'react';

import Menu from './components/Menu';
import { FlexContainer } from './styles';

const MenuList = ({ data, clicked }) => (
  <FlexContainer>
    {data.map( el => 
      <Menu title={el.title} icon={el.icon} key={el.id} clicked={() => clicked(el.id)}/>
    )}
  </FlexContainer>
);

export default MenuList;