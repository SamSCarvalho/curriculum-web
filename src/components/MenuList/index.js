import React from 'react';

import Menu from './components/Menu';
import { FlexContainer } from './styles';

const MenuList = ({ data, clicked, selected }) => (
  <FlexContainer selected={(selected !== null)}>
    {data.map( el => (selected === null || selected === el.id) ?
      <Menu
        title={el.title}
        icon={el.icon}
        key={el.id}
        clicked={() => clicked(el.id)}
        selected={(selected === el.id)}/>
      : null
    )}
  </FlexContainer>
);

export default MenuList;