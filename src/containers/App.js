import React, { useState } from 'react';

import { Container } from './styles';
import Header from '../components/Header';
import MenuList from '../components/MenuList';
import InfoView from '../components/InfoView';
import Footer from '../components/Footer';


import menuJson from '../data/menu.json';

const App = () => {
  const [selected, setSelected] = useState(null);

  const clearSelected = () => setSelected(null);

  return (
    <Container>
      <Header />
      {(selected === null) ? 
        <MenuList clicked={setSelected} data={menuJson} /> :
        <InfoView cancel={clearSelected} />
      }
      <Footer />
    </Container>
  );
}

export default App;
