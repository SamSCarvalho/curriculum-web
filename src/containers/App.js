import React from 'react';

import { Container } from './styles';
import Header from '../components/Header';
import Menu from '../components/MenuList';
import Footer from '../components/Footer';

const App = () => {
  return (
    <Container>
      <Header />
      <Menu />
      <Footer />
    </Container>
  );
}

export default App;
