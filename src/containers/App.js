import React, { useState, useEffect } from 'react';

import { Container } from './styles';
import Header from '../components/Header';
import MenuList from '../components/MenuList';
import InfoView from '../components/InfoView';
import Footer from '../components/Footer';
import InfoDetails from '../components/InfoDetails';


import menuJson from '../data/menu.json';
import checkKeyCode from '../utils/checkKeyDown';
import checkMenuCommand from '../utils/checkMenuCommand';


const App = () => {
  const [selected, setSelected] = useState(null);
  const [animation, setAnimation] = useState(false);
  const [pressedKeys, setPressedKeys] = useState([]);

  useEffect(() => {
    const onKeyDown = ({ key, keyCode }) => {
      if (key === 'Backspace'){
        setPressedKeys(previousPressedKeys => {
          const newArray = [...previousPressedKeys];
          newArray.pop();
          return newArray;
        });
      }
      else if (checkKeyCode(keyCode))
        setPressedKeys(previousPressedKeys => [...previousPressedKeys, key]);
    }

    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const checked = checkMenuCommand(pressedKeys);
    if (checked !== false) {
      setSelected(checked);
    }
    if (pressedKeys.length > 11) setPressedKeys([]);
  }, [pressedKeys]);

  const clearSelected = () => {
    setAnimation(true);
    setTimeout(() => {
      setAnimation(false);
      setSelected(null);
      setPressedKeys([]);
    }, 500);
  };

  const selectedCategory = (id) => {
    setSelected(id);
    const command = menuJson.find(el => el.id === id).command;
    setPressedKeys(command.split(''));
  }

  useEffect(() => window.scrollTo(0, 0), [selected]);

  const filterInfoDetails = () => InfoDetails.find(
    el => el.id === selected
  ).component;

  return (
    <Container>
      <Header lineCommand={pressedKeys}/>
      <MenuList
        clicked={selectedCategory}
        data={menuJson}
        selected={selected}
        animation={animation}
      /> 
      {(selected === null) ? 
        null :
        <InfoView
          cancel={clearSelected}
          animation={animation}
          ComponentDetails={filterInfoDetails()}
        />
      }
      <Footer />
    </Container>
  );
}

export default App;
