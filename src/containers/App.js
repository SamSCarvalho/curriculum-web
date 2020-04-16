import React, { useState, useEffect } from 'react';

import { Container } from './styles';
import Header from '../components/Header';
import MenuList from '../components/MenuList';
import InfoView from '../components/InfoView';
import Footer from '../components/Footer';


import menuJson from '../data/menu.json';

const App = () => {
  const [selected, setSelected] = useState(null);

  const clearSelected = () => setSelected(null);

  useEffect(() => window.scrollTo(0, 0), [selected]);

  return (
    <Container>
      <Header />
      <MenuList clicked={setSelected} data={menuJson} selected={selected} /> 
      {(selected === null) ? 
        null :
        <InfoView cancel={clearSelected} />
      }
      <Footer />
    </Container>
  );
}

export default App;
